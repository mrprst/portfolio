import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const newsContent = {
  "en-US": {
    title: "Your News",
    content: [
      {
        title:
          "Otter.ai’s new assistant can automatically transcribe your Zoom meetings",
        synopsis:
          "A.I.-powered voice transcription service Otter.ai wants to make it even easier for its business users to record their meetings. The company is today introducing a new feature, Otter Assistant, whic...",
        imageUrl: "",
      },
      // ...
    ],
  },
  "fr-FR": {
    title: "Vos nouvelles",
    content: [
      {
        title:
          "Le nouvel assistant d'Otter.ai peut transcrire automatiquement vos réunions Zoom",
        synopsis:
          "Le service de transcription vocale alimenté par A.I. Otter.ai veut rendre encore plus facile pour ses utilisateurs professionnels l'enregistrement de leurs réunions. La société présente aujourd'hui une nouvelle fonctionnalité, Otter Assistant, qui ...",
        imageUrl: "",
      },
      // ...
    ],
  },
  "es-ES": {
    title: "Tus noticias",
    content: [
      {
        title:
          "El nuevo asistente de Otter.ai puede transcribir automáticamente sus reuniones de Zoom",
        synopsis:
          "El servicio de transcripción de voz con tecnología de inteligencia artificial Otter.ai quiere facilitar aún más a sus usuarios comerciales la grabación de sus reuniones. La compañía presenta hoy una nueva función, Otter Assistant, que ...",
        imageUrl: "",
      },
      // ...
    ],
  },
};

export default function News(props) {

  console.log(locale, locales, defaultLocale);

  return (
    <div>
      <Head>
        <title>TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <div
            style={{
              padding: "4px",
              marginRight: "4px",
            }}
          >
            <span>Current Language: </span>
            <span
              style={{
                borderRadius: "3px",
                backgroundColor: "blue",
                color: "white",
                padding: "2px",
              }}
            >
              {locale}
            </span>
          </div>
          <Link
            activeClassName={locale === "es-ES"}
            href={asPath}
            locale="es-ES"
          >
            es-ES
          </Link>

          <Link
            activeClassName={locale === "en-US"}
            href={asPath}
            locale="en-US"
          >
            en-US
          </Link>
          <Link
            activeClassName={locale === "fr-FR"}
            href={asPath}
            locale="fr-FR"
          >
            fr-FR
          </Link>
        </div>

      </main>
    </div>
  );
}
