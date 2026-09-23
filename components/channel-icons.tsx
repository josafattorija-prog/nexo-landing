import { Glyph } from "./atoms";

// Logos de marca de los 4 canales del Inbox, en SVG inline (sin CDNs externos).

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F58529" />
          <stop offset=".35" stopColor="#DD2A7B" />
          <stop offset=".7" stopColor="#8134AF" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#ig-grad)" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.6" stroke="url(#ig-grad)" strokeWidth="2.2" />
      <circle cx="17.6" cy="6.4" r="1.35" fill="url(#ig-grad)" />
    </svg>
  );
}

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

function EmailIcon({ size }: { size: number }) {
  return (
    <span style={{ color: "#34d399", display: "inline-flex" }} aria-hidden="true">
      <Glyph name="mail" size={size} />
    </span>
  );
}

const CHANNELS = [
  { name: "WhatsApp",  glow: "rgba(37,211,102,.35)",  Icon: WhatsAppIcon },
  { name: "Instagram", glow: "rgba(221,42,123,.35)",  Icon: InstagramIcon },
  { name: "Facebook",  glow: "rgba(24,119,242,.35)",  Icon: FacebookIcon },
  { name: "Email",     glow: "rgba(52,211,153,.35)",  Icon: EmailIcon },
];

export default function ChannelIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
      {CHANNELS.map(({ name, glow, Icon }) => (
        <div
          key={name}
          role="img"
          aria-label={name}
          className="channel-card relative flex flex-col items-center justify-center gap-4 rounded-2xl border px-4 py-8 transition-transform duration-300 hover:scale-105"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-8 h-20 w-20 -translate-x-1/2 rounded-full blur-2xl"
            style={{ background: glow }}
          />
          <span className="relative flex">
            <Icon size={64} />
          </span>
          <span className="relative text-sm font-semibold text-text">{name}</span>
        </div>
      ))}
    </div>
  );
}
