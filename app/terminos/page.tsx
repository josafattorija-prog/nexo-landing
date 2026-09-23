import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal-page";
import { BUSINESS, fullAddress, LEGAL_LAST_UPDATED } from "@/lib/business";
import { Brand } from "@/components/brand";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y Condiciones de uso del servicio NexoAI, CRM inmobiliario All-in-One para México.",
  openGraph: {
    title: "Términos y Condiciones — NexoAI",
    description: "Condiciones de contratación y uso de la plataforma NexoAI.",
    url: "https://nexoai.mx/terminos",
  },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <LegalPage
      eyebrow="LEGAL · CONDICIONES DE USO"
      title="Términos y Condiciones"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro={
        <p>
          Estos Términos y Condiciones rigen el acceso y uso de la plataforma{" "}
          <strong><Brand /></strong>, operada por <strong>{BUSINESS.legalName}</strong>,
          RFC {BUSINESS.rfc}, con domicilio en {fullAddress()}. Al crear una cuenta o utilizar
          el servicio, usted acepta estos términos en su totalidad.
        </p>
      }
      sections={[
        {
          heading: "Objeto del servicio",
          body: (
            <p>
              <Brand /> es un servicio de software en la nube (SaaS) que ofrece a
              agencias y asesores inmobiliarios herramientas de gestión de propiedades,
              administración de prospectos, mensajería omnicanal, análisis de mercado y
              asistencia mediante inteligencia artificial. El servicio se presta &ldquo;tal
              como está&rdquo; conforme al plan contratado.
            </p>
          ),
        },
        {
          heading: "Cuenta y registro",
          body: (
            <>
              <p>
                Para usar el servicio debe crear una cuenta con información veraz y mantenerla
                actualizada. Usted es responsable de resguardar sus credenciales y de toda
                actividad realizada desde su cuenta.
              </p>
              <p>
                Debe ser mayor de edad y contar con capacidad legal para contratar. Si actúa a
                nombre de una persona moral, declara tener facultades suficientes para obligarla.
              </p>
            </>
          ),
        },
        {
          heading: "Planes, precios y facturación",
          body: (
            <>
              <p>
                Los planes disponibles y sus precios se publican en la página de{" "}
                <Link href="/precios">Precios</Link>. Los importes se expresan en pesos mexicanos
                e incluyen los impuestos aplicables salvo que se indique lo contrario.
              </p>
              <p>
                La suscripción se renueva automáticamente al término de cada periodo, salvo
                cancelación previa. Podemos modificar los precios notificándole con al menos{" "}
                <strong>30 días naturales</strong> de anticipación; el nuevo precio aplicará a
                partir del siguiente periodo de renovación.
              </p>
            </>
          ),
        },
        {
          heading: "Periodo de prueba y cancelación",
          body: (
            <>
              <p>
                Ofrecemos un periodo de prueba gratuito cuya duración se indica al momento del
                registro. Durante la prueba no se realizan cargos y puede cancelar sin costo.
              </p>
              <p>
                Puede cancelar su suscripción en cualquier momento desde la configuración de su
                cuenta o escribiendo a {BUSINESS.email}. La cancelación surte efecto al final del
                periodo pagado; conservará el acceso hasta esa fecha. Salvo disposición legal en
                contrario, los periodos ya facturados no son reembolsables.
              </p>
              <p>
                Tras la cancelación podrá solicitar la exportación de su información dentro de
                los <strong>30 días naturales</strong> siguientes, después de los cuales podremos
                eliminarla de forma definitiva.
              </p>
            </>
          ),
        },
        {
          heading: "Disponibilidad y soporte",
          body: (
            <p>
              Trabajamos para mantener el servicio disponible de forma continua, pero no
              garantizamos una operación ininterrumpida ni libre de errores. Podemos realizar
              tareas de mantenimiento programado, procurando avisar con antelación y elegir
              horarios de bajo impacto. El soporte se brinda en español por correo electrónico
              en {BUSINESS.supportEmail} y por WhatsApp en {BUSINESS.whatsapp}.
            </p>
          ),
        },
        {
          heading: "Uso aceptable",
          body: (
            <>
              <p>Al utilizar el servicio, usted se obliga a no:</p>
              <ul>
                <li>Enviar comunicaciones no solicitadas o masivas sin el consentimiento de los destinatarios.</li>
                <li>Publicar información falsa, engañosa o sobre inmuebles que no esté facultado para comercializar.</li>
                <li>Vulnerar, sondear o intentar acceder sin autorización a la plataforma o a datos de otros usuarios.</li>
                <li>Utilizar el servicio para fines ilícitos o contrarios a la normativa aplicable, incluida la de protección de datos personales.</li>
                <li>Revender o sublicenciar el servicio sin autorización escrita.</li>
              </ul>
              <p>
                El incumplimiento puede dar lugar a la suspensión o terminación de la cuenta, sin
                perjuicio de las acciones legales que correspondan.
              </p>
            </>
          ),
        },
        {
          heading: "Propiedad intelectual",
          body: (
            <>
              <p>
                La plataforma, su código, diseño, marcas y documentación son propiedad de{" "}
                {BUSINESS.legalName} o de sus licenciantes. Estos términos no le transfieren
                derecho de propiedad alguno sobre ellos.
              </p>
              <p>
                <strong>La información que usted carga es suya.</strong> Nos otorga únicamente la
                licencia limitada necesaria para alojarla, procesarla y mostrársela con el fin de
                prestarle el servicio.
              </p>
            </>
          ),
        },
        {
          heading: "Inteligencia artificial",
          body: (
            <p>
              Ciertas funciones generan contenido mediante modelos de inteligencia artificial
              (redacción de fichas, sugerencias de respuesta, puntuación de prospectos y
              estimaciones de mercado). Estos resultados son <strong>orientativos</strong> y
              pueden contener errores. Usted es responsable de revisarlos antes de publicarlos o
              comunicarlos a terceros. Las estimaciones de valor no constituyen un avalúo ni
              asesoría financiera o legal.
            </p>
          ),
        },
        {
          heading: "Protección de datos personales",
          body: (
            <p>
              El tratamiento de datos personales se rige por nuestro{" "}
              <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>. Respecto de los datos
              de los prospectos que usted capta a través de la plataforma, usted actúa como
              responsable y nosotros como encargado, en los términos de la Ley Federal de
              Protección de Datos Personales en Posesión de los Particulares.
            </p>
          ),
        },
        {
          heading: "Limitación de responsabilidad",
          body: (
            <p>
              En la medida permitida por la legislación aplicable, nuestra responsabilidad total
              frente a usted por cualquier reclamación relacionada con el servicio se limita al
              monto que usted haya pagado en los <strong>12 meses</strong> anteriores al hecho
              que la origine. No respondemos por daños indirectos, lucro cesante, pérdida de
              oportunidades comerciales ni por la pérdida de información imputable a causas
              ajenas a nuestro control.
            </p>
          ),
        },
        {
          heading: "Modificaciones",
          body: (
            <p>
              Podemos actualizar estos Términos. Los cambios sustanciales se notificarán por
              correo electrónico o mediante un aviso dentro de la plataforma con al menos 15 días
              naturales de anticipación. El uso continuado del servicio después de la entrada en
              vigor implica su aceptación.
            </p>
          ),
        },
        {
          heading: "Legislación aplicable y jurisdicción",
          body: (
            <p>
              Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para su
              interpretación y cumplimiento, las partes se someten a la jurisdicción de los
              tribunales competentes de la <strong>Ciudad de Puebla, Puebla</strong>, renunciando
              a cualquier otro fuero que pudiera corresponderles. Lo anterior sin perjuicio de
              los derechos que la legislación en materia de protección al consumidor conceda a
              los usuarios.
            </p>
          ),
        },
      ]}
    />
  );
}
