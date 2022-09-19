import classes from './About.module.scss'
import Profilepic from '../profilepic'

type LocaleProps = {
  localeFile: {
    aboutTitle: string;
    aboutText: string;
    profilepicCTA: string
  };
}

export default function About({localeFile}: LocaleProps) {

  return (
    <div id="about" className={classes.container}>
      <h1 className={classes.title}>{localeFile.aboutTitle}</h1>
      <div className={classes.content}>
        <p
          className={classes.text}
          dangerouslySetInnerHTML={{ __html: localeFile.aboutText }}
        ></p>
        <div className={classes.containerpic}>
          <Profilepic cta={localeFile.profilepicCTA} />
        </div>
      </div>
    </div>
  )
}
