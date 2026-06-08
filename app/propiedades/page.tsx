"use client";

import { useEffect, useState, useMemo } from "react";

interface PropertyOrg {
  name: string;
  phone: string | null;
  email: string | null;
  logo: string | null;
  slug: string | null;
}
interface PropertyImage {
  url: string;
}
interface BolsaProperty {
  id: string;
  title: string;
  type: string;
  operation: string;
  price: string | null;
  priceRent: string | null;
  currency: string | null;
  city: string | null;
  state: string | null;
  neighborhood: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  area: number | null;
  areaUnit: string | null;
  slug: string | null;
  images: PropertyImage[];
  organization: PropertyOrg;
}

const CRM_URL = "https://app.nexoai.mx";

const TYPE_LABEL: Record<string, string> = {
  CASA: "Casa",
  DEPARTAMENTO: "Depto",
  OFICINA: "Oficina",
  TERRENO: "Terreno",
  LOCAL_COMERCIAL: "Local",
  BODEGA: "Bodega",
  EDIFICIO: "Edificio",
  RANCHO: "Rancho",
  DESARROLLO: "Desarrollo",
  OTRO: "Otro",
};

const OP_LABEL: Record<string, string> = {
  SALE: "Venta",
  RENT: "Renta",
  BOTH: "Venta/Renta",
  TRANSFER: "Traspaso",
  PRE_SALE: "Preventa",
};

function fmtPrice(price: string | null, currency: string | null): string {
  if (!price) return "—";
  const n = parseFloat(price);
  if (isNaN(n)) return "—";
  const sym = "$";
  const suf = currency === "USD" ? " USD" : " MXN";
  if (n >= 1_000_000) return `${sym}${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M${suf}`;
  if (n >= 1_000) return `${sym}${(n / 1_000).toFixed(0)}K${suf}`;
  return `${sym}${n.toLocaleString("es-MX")}${suf}`;
}

function PropertyCard({ p }: { p: BolsaProperty }) {
  const image = p.images[0]?.url;
  const isForSale = p.operation === "SALE" || p.operation === "BOTH" || p.operation === "PRE_SALE";
  const price = isForSale ? p.price : p.priceRent;
  const location = [p.neighborhood, p.city].filter(Boolean).join(", ");
  const portalUrl = p.slug && p.organization.slug
    ? `https://app.nexoai.mx/${p.organization.slug}/propiedades/${p.slug}`
    : null;
  const href = portalUrl
    ?? (p.organization.phone ? `https://wa.me/${p.organization.phone.replace(/\D/g, "")}` : "#");

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="prop-card card">
      <div className="prop-img">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={p.title} loading="lazy" />
        ) : (
          <div className="prop-img-placeholder">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
        )}
        <div className="prop-badges">
          <span className="prop-badge">{TYPE_LABEL[p.type] ?? p.type}</span>
          <span className="prop-badge op">{OP_LABEL[p.operation] ?? p.operation}</span>
        </div>
        <div className="prop-commission">🤝 Comisión compartida</div>
      </div>
      <div className="prop-body">
        <h3 className="prop-title">{p.title}</h3>
        {location && (
          <p className="prop-location">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </p>
        )}
        <div className="prop-specs">
          {p.bedrooms != null && <span>🛏 {p.bedrooms} rec</span>}
          {p.bathrooms != null && <span>🚿 {p.bathrooms} baños</span>}
          {p.area != null && <span>📐 {p.area} {p.areaUnit ?? "m²"}</span>}
        </div>
        <div className="prop-price">{fmtPrice(price, p.currency)}</div>
        <div className="prop-org">
          {p.organization.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.organization.logo} alt={p.organization.name} className="prop-org-logo" />
          ) : (
            <div className="prop-org-avatar">{p.organization.name.charAt(0)}</div>
          )}
          <span>{p.organization.name}</span>
        </div>
      </div>
    </a>
  );
}

const TYPES = [
  { value: "",               label: "Todos"    },
  { value: "CASA",           label: "Casas"    },
  { value: "DEPARTAMENTO",   label: "Deptos"   },
  { value: "TERRENO",        label: "Terrenos" },
  { value: "OFICINA",        label: "Oficinas" },
  { value: "LOCAL_COMERCIAL", label: "Locales" },
];
const OPS = [
  { value: "",     label: "Venta y Renta" },
  { value: "SALE", label: "Venta"         },
  { value: "RENT", label: "Renta"         },
];

export default function PropiedadesPage() {
  const [all, setAll] = useState<BolsaProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [typeFilter, setTypeFilter] = useState("");
  const [opFilter, setOpFilter] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    fetch(`${CRM_URL}/api/public/bolsa`)
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data: BolsaProperty[]) => {
        if (!cancelled) { setAll(data); setLoading(false); }
      })
      .catch(() => { if (!cancelled) { setError(true); setLoading(false); } });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 150);
    return () => clearTimeout(t);
  }, [search]);

  const properties = useMemo(() => {
    const needle = debouncedSearch.trim().toLowerCase();
    return all.filter(p => {
      if (typeFilter && p.type !== typeFilter) return false;
      if (opFilter === "SALE" && p.operation !== "SALE" && p.operation !== "BOTH" && p.operation !== "PRE_SALE") return false;
      if (opFilter === "RENT" && p.operation !== "RENT" && p.operation !== "BOTH") return false;
      if (needle) {
        const hay = [p.title, p.city, p.state, p.neighborhood].filter(Boolean).join(" ").toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [all, typeFilter, opFilter, debouncedSearch]);

  const hasFilters = typeFilter || opFilter || search;
  const clearFilters = () => { setSearch(""); setTypeFilter(""); setOpFilter(""); };

  return (
    <>
      <section className="section tight" style={{ paddingBottom: 0 }}>
        <div className="shell">
          <div className="section-head center">
            <h1 style={{ marginTop: 0 }}>
              🤝 Bolsa Inmobiliaria
            </h1>
          </div>
          <div className="prop-filters">
            <div className="prop-search-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Ciudad, colonia o título…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="prop-search"
              />
              {search && (
                <button className="prop-search-clear" onClick={() => setSearch("")} aria-label="Limpiar">✕</button>
              )}
            </div>
            <div className="prop-chip-row">
              {TYPES.map(t => (
                <button key={t.value} onClick={() => setTypeFilter(t.value)}
                  className={`chip${typeFilter === t.value ? " chip-primary" : ""}`}>
                  {t.label}
                </button>
              ))}
              <div className="prop-sep" />
              {OPS.map(o => (
                <button key={o.value} onClick={() => setOpFilter(o.value)}
                  className={`chip${opFilter === o.value ? " chip-primary" : ""}`}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="shell">
          {loading ? (
            <div className="prop-state">
              <div className="prop-spinner" />
              <p style={{ color: "var(--muted)" }}>Cargando propiedades…</p>
            </div>
          ) : error ? (
            <div className="prop-state">
              <span style={{ fontSize: 40 }}>⚠️</span>
              <p style={{ color: "var(--muted)" }}>No se pudieron cargar. Intenta de nuevo.</p>
              <button className="btn btn-ghost" onClick={() => window.location.reload()}>Reintentar</button>
            </div>
          ) : properties.length === 0 ? (
            <div className="prop-state">
              <span style={{ fontSize: 40 }}>🏠</span>
              <p style={{ color: "var(--muted)" }}>
                {hasFilters ? "Sin resultados para esos filtros." : "Aún no hay propiedades en bolsa."}
              </p>
              {hasFilters && <button className="btn btn-ghost" onClick={clearFilters}>Limpiar filtros</button>}
            </div>
          ) : (
            <>
              <p className="prop-count">
                {properties.length} propiedad{properties.length !== 1 ? "es" : ""} disponible{properties.length !== 1 ? "s" : ""}
                {all.length !== properties.length && <span style={{ marginLeft: 8, opacity: .5 }}>de {all.length}</span>}
              </p>
              <div className="prop-grid">
                {properties.map(p => <PropertyCard key={p.id} p={p} />)}
              </div>
            </>
          )}
          {!loading && !error && (
            <div style={{ textAlign: "center", marginTop: 64 }}>
              <p style={{ color: "var(--muted)", marginBottom: 20, fontSize: 15 }}>
                ¿Quieres publicar tus propiedades en la bolsa?
              </p>
              <a href="https://app.nexoai.mx/sign-up" className="btn btn-primary" style={{ height: 48, padding: "0 28px" }}>
                Crear cuenta gratis →
              </a>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .bolsa-pill { display: inline-flex; align-items: center; gap: 6px; background: rgba(52,211,153,.08); border: 1px solid rgba(52,211,153,.22); color: var(--accent); font-size: 13px; font-weight: 600; padding: 6px 16px; border-radius: 100px; }
        .prop-filters { display: flex; flex-direction: column; gap: 14px; margin-top: 40px; padding: 20px 24px; background: var(--surface); border: 1.5px solid var(--border-card); border-radius: var(--radius-lg); }
        .prop-search-wrap { position: relative; display: flex; align-items: center; }
        .prop-search-wrap > svg { position: absolute; left: 14px; color: var(--muted); pointer-events: none; }
        .prop-search { width: 100%; padding: 10px 36px 10px 40px; background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--text); font-size: 14px; outline: none; transition: border-color .2s; }
        .prop-search:focus { border-color: var(--accent); }
        .prop-search::placeholder { color: var(--muted); }
        .prop-search-clear { position: absolute; right: 12px; background: none; border: none; color: var(--muted); cursor: pointer; font-size: 13px; padding: 4px; line-height: 1; }
        .prop-search-clear:hover { color: var(--text); }
        .prop-chip-row { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
        .prop-sep { width: 1px; height: 20px; background: var(--border); margin: 0 4px; }
        .prop-count { font-size: 13px; color: var(--muted); margin-bottom: 24px; font-family: var(--font-mono), monospace; letter-spacing: .05em; }
        .prop-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(295px, 1fr)); gap: 24px; }
        .prop-card { display: flex; flex-direction: column; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s; }
        .prop-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-glow); }
        .prop-img { position: relative; width: 100%; aspect-ratio: 16/10; overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) 0 0; background: var(--surface-2); }
        .prop-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
        .prop-card:hover .prop-img img { transform: scale(1.04); }
        .prop-img-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--muted); }
        .prop-badges { position: absolute; top: 12px; left: 12px; display: flex; gap: 6px; }
        .prop-badge { background: rgba(3,13,8,.78); backdrop-filter: blur(6px); border: 1px solid rgba(52,211,153,.3); color: var(--accent); font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 100px; letter-spacing: .04em; }
        .prop-badge.op { background: rgba(5,150,105,.2); border-color: var(--primary); color: var(--glow); }
        .prop-commission { position: absolute; bottom: 10px; right: 10px; background: rgba(3,13,8,.82); backdrop-filter: blur(6px); border: 1px solid rgba(52,211,153,.25); color: var(--accent); font-size: 10px; font-weight: 600; padding: 3px 9px; border-radius: 100px; }
        .prop-body { flex: 1; display: flex; flex-direction: column; gap: 8px; padding: 18px 20px 20px; border: 1.5px solid var(--border-card); border-top: none; border-radius: 0 0 var(--radius-lg) var(--radius-lg); background: var(--card-bg); }
        .prop-title { font-size: 15px; font-weight: 700; color: var(--text); line-height: 1.3; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .prop-location { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--muted); margin: 0; }
        .prop-specs { display: flex; gap: 10px; flex-wrap: wrap; font-size: 12px; color: var(--text-dim); }
        .prop-specs span { display: flex; align-items: center; gap: 4px; }
        .prop-price { font-size: 20px; font-weight: 800; color: var(--accent); margin-top: 4px; letter-spacing: -.02em; }
        .prop-org { display: flex; align-items: center; gap: 8px; padding-top: 10px; border-top: 1px solid var(--border-soft); font-size: 12px; color: var(--muted); }
        .prop-org-logo { width: 22px; height: 22px; border-radius: 4px; object-fit: cover; }
        .prop-org-avatar { width: 22px; height: 22px; border-radius: 4px; background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; }
        .prop-state { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; padding: 80px 0; text-align: center; color: var(--text); }
        .prop-spinner { width: 36px; height: 36px; border-radius: 50%; border: 3px solid var(--border); border-top-color: var(--accent); animation: spin .7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) { .prop-grid { grid-template-columns: 1fr; } .prop-sep { display: none; } }
      `}</style>
    </>
  );
}
