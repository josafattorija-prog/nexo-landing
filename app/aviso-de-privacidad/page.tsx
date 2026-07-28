import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal-page";
import { BUSINESS, fullAddress, LEGAL_LAST_UPDATED } from "@/lib/business";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de Privacidad Integral de Nexo AI conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  openGraph: {
    title: "Aviso de Privacidad — Nexo AI",
    description: "Cómo Nexo AI trata los datos personales de sus prospectos y clientes.",
    url: "https://nexoai.mx/aviso-de-privacidad",
  },
  robots: { index: true, follow: true },
};

export default function AvisoDePrivacidadPage() {
  return (
    <LegalPage
      eyebrow="LEGAL · LFPDPPP"
      title="Aviso de Privacidad Integral"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro={
        <p>
          El presente Aviso de Privacidad se emite en cumplimiento de la Ley Federal de
          Protección de Datos Personales en Posesión de los Particulares, su Reglamento y los
          Lineamientos del Aviso de Privacidad, y describe cómo tratamos los datos personales
          de quienes contactan o contratan <strong>{BUSINESS.brand}</strong>.
        </p>
      }
      sections={[
        {
          heading: "Identidad y domicilio del responsable",
          body: (
            <>
              <p>
                <strong>{BUSINESS.legalName}</strong>, con Registro Federal de Contribuyentes{" "}
                <strong>{BUSINESS.rfc}</strong>, quien opera comercialmente bajo la marca{" "}
                <strong>{BUSINESS.brand}</strong>, es el responsable del tratamiento de sus
                datos personales.
              </p>
              <ul>
                <li><strong>Domicilio:</strong> {fullAddress()}</li>
                <li><strong>Teléfono:</strong> {BUSINESS.phone}</li>
                <li><strong>Correo electrónico:</strong> {BUSINESS.email}</li>
                <li><strong>Sitio web:</strong> {BUSINESS.website}</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Datos personales que recabamos",
          body: (
            <>
              <p>Según su relación con nosotros, podemos recabar:</p>
              <ul>
                <li><strong>Datos de identificación y contacto:</strong> nombre, correo electrónico y número telefónico o de WhatsApp.</li>
                <li><strong>Datos de la empresa:</strong> nombre comercial de la inmobiliaria, tamaño del equipo y herramientas que utiliza actualmente.</li>
                <li><strong>Datos de facturación:</strong> únicamente cuando contrata un plan de pago, los datos fiscales necesarios para emitir el comprobante correspondiente.</li>
              </ul>
              <p>
                <strong>No recabamos datos personales sensibles</strong> ni datos patrimoniales
                distintos de los estrictamente necesarios para facturar.
              </p>
            </>
          ),
        },
        {
          heading: "Finalidades primarias",
          body: (
            <>
              <p>Las siguientes finalidades son necesarias para la relación jurídica con usted:</p>
              <ul>
                <li>Atender sus solicitudes de información, demostración o contacto.</li>
                <li>Crear y administrar su cuenta y prestarle el servicio de CRM.</li>
                <li>Brindar soporte técnico y atención a incidencias.</li>
                <li>Emitir comprobantes fiscales y gestionar cobros.</li>
                <li>Cumplir obligaciones legales que nos resulten aplicables.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Finalidades secundarias",
          body: (
            <>
              <p>
                Adicionalmente, y sólo si usted no manifiesta su oposición, podemos utilizar sus
                datos para enviarle comunicaciones sobre novedades, contenidos y promociones de{" "}
                {BUSINESS.brand}.
              </p>
              <p>
                <strong>
                  Estas finalidades no son necesarias para el servicio. Si no desea que sus datos
                  se traten para ellas, puede manifestarlo enviando un correo a {BUSINESS.email}.
                  Su negativa no será motivo para negarle los servicios que contrató.
                </strong>
              </p>
            </>
          ),
        },
        {
          heading: "Transferencias y remisiones",
          body: (
            <>
              <p>
                <strong>No vendemos, ni comercializamos, ni cedemos sus datos personales a
                terceros con fines publicitarios.</strong>
              </p>
              <p>
                Para operar el servicio nos apoyamos en proveedores que actúan como encargados,
                es decir, tratan los datos por nuestra cuenta y bajo nuestras instrucciones:
                infraestructura de alojamiento y base de datos, envío de correo transaccional,
                procesamiento de pagos y mensajería. Conforme al artículo 51 del Reglamento de la
                Ley, la comunicación de datos a un encargado constituye una remisión y no
                requiere su consentimiento.
              </p>
              <p>
                Únicamente transferiremos sus datos a autoridades competentes cuando exista un
                requerimiento fundado y motivado, o en los demás supuestos del artículo 37 de la Ley.
              </p>
            </>
          ),
        },
        {
          heading: "Derechos ARCO",
          body: (
            <>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos, para qué los usamos y
                las condiciones de su uso (<strong>Acceso</strong>); solicitar la corrección de su
                información cuando sea inexacta o incompleta (<strong>Rectificación</strong>);
                pedir que la eliminemos de nuestros registros cuando considere que no está siendo
                utilizada conforme a los principios y deberes de la Ley (<strong>Cancelación</strong>);
                y oponerse al uso de sus datos para fines específicos (<strong>Oposición</strong>).
              </p>
              <p>
                Para ejercer cualquiera de estos derechos, envíe su solicitud a{" "}
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> acompañada de:
              </p>
              <ul>
                <li>Su nombre y un medio para comunicarle la respuesta.</li>
                <li>Copia de una identificación oficial que acredite su identidad, o la del representante legal.</li>
                <li>Descripción clara de los datos respecto de los que ejerce el derecho.</li>
                <li>Cualquier elemento que facilite la localización de sus datos.</li>
              </ul>
              <p>
                Responderemos en un plazo máximo de <strong>20 días hábiles</strong> conforme al
                artículo 32 de la Ley. De resultar procedente, la solicitud se hará efectiva
                dentro de los 15 días hábiles siguientes.
              </p>
            </>
          ),
        },
        {
          heading: "Revocación del consentimiento",
          body: (
            <p>
              Puede revocar en cualquier momento el consentimiento que nos otorgó para el
              tratamiento de sus datos personales, por el mismo medio señalado para los derechos
              ARCO. Tenga en cuenta que, por obligaciones legales o por la naturaleza de la
              relación contractual, en ciertos casos no será posible atender la solicitud de
              forma inmediata o concluir el uso de manera anticipada.
            </p>
          ),
        },
        {
          heading: "Uso de cookies y tecnologías de rastreo",
          body: (
            <>
              <p>
                Este sitio utiliza <strong>almacenamiento local del navegador</strong> con una
                única finalidad técnica: recordar si usted eligió el tema claro u oscuro. Esa
                preferencia se guarda en su propio equipo, no se transmite a nuestros servidores
                y no permite identificarlo.
              </p>
              <p>
                No empleamos cookies publicitarias ni de perfilamiento en este sitio. Puede
                borrar el almacenamiento local desde la configuración de su navegador en
                cualquier momento.
              </p>
            </>
          ),
        },
        {
          heading: "Datos tratados por cuenta de nuestros clientes",
          body: (
            <p>
              Cuando una inmobiliaria contrata {BUSINESS.brand}, los datos de los prospectos que
              ella capta a través de la plataforma son tratados por nosotros en calidad de{" "}
              <strong>encargado</strong>: la inmobiliaria es el responsable de esos datos y quien
              define las finalidades. Cada inmobiliaria publica su propio aviso de privacidad en
              su portal. Si usted es un prospecto de una inmobiliaria y desea ejercer sus derechos,
              diríjase a ella; podemos orientarle escribiendo a {BUSINESS.email}.
            </p>
          ),
        },
        {
          heading: "Cambios al presente aviso",
          body: (
            <p>
              Cualquier modificación a este Aviso de Privacidad se publicará en esta misma
              página, indicando la fecha de la última actualización. Le sugerimos consultarla
              periódicamente. Consulte también nuestros{" "}
              <Link href="/terminos">Términos y Condiciones</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
