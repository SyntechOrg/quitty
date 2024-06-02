import { ReactNode } from "react";

export type Project = {
  slug: string;
  title: string;
  heroText:  string | ReactNode;
  date: string;
  heroImage: string;
  heroInsideImage: string;
  heroTitle: string;
  liveUrl: string;
  services: string[];
  productType: string[];
  expertise: string[];
  release: string[];
  interactions: Array<{
    name: string;
    subject: string;
    description: string;
    avatar: string | null;
  }>;
  mainChallenge: {
    title: string;
    description: string;
    imageUrl: string | null;
  };
  ourSolution: {
    title: string;
    description: string;
    imageUrl: string | null;
  };

  projectViewImageTwo?: string;
};

export const projects: Array<Project> = [
  {
    slug: "spandoekman",
    title: "Spandoekman",
    heroText:( 
    <>Visuelle Präsentation des neu gestalteten Webshops von Spandoekman.nl</>),
    date: "2024-05-22",
    heroImage: "/images/projects/spandoekman/banner.png",
    heroInsideImage: "/images/projects/spandoekman/bannerInnerImage.png",
    heroTitle: "Brand identity, design & development for luxury cruise booking",
    liveUrl: "Direkt sehen",
    services: ["UI UX Design", "Entwicklung"],
    productType: ["Webseite", "E-Commerce"],
    expertise: ["Frontend", "Shopify"],
    release: ["Mai", "2024"],
    mainChallenge: {
      title: "Entwicklung eines herausragenden Webshops in einem hart umkämpften Markt.",
      description:
        "Spandoekman.nl, ist seit 2011 ohne nennenswerte Aktualisierungen in Betrieb. Jetzt ist ein komplettes Redesign erforderlich, um sich in einem überfüllten Markt von der Masse abzuheben. Mit einem breiten Produktsortiment - von Bannern und Gerüstrohren bis hin zu Heimwerkermöbeln und Werbeartikeln - ist es wichtig, alles zu präsentieren, ohne die Besucher zu überfordern. Layout, Kategorisierung und visuelle Hierarchie müssen sorgfältig berücksichtigt werden, um eine ansprechende und effektive Seite zu gestalten.",
      imageUrl: "/images/projects/spandoekman/solutionAndChallenge-1.png",
    },
    ourSolution: {
      title: "Umfassende Neugestaltung für ein besseres Nutzererlebniss",
      description:
        "Um dieser Herausforderung gerecht zu werden, konzentriert sich unser Ansatz auf die Schaffung eines klaren, intuitiven Layouts, das unser vielfältiges Produktangebot hervorhebt, ohne die Besucher zu überfordern. Wir werden ein klares Kategorisierungssystem und eine visuell ansprechende Hierarchie einführen, um eine einfache Navigation zu gewährleisten. Darüber hinaus werden wir unser Engagement für Kreativität und Nachhaltigkeit unterstreichen und den gesamten Prozess von der Bestellung bis zur Lieferung optimieren, um das Kundenerlebnis zu verbessern.",
      imageUrl: "/images/projects/spandoekman/solutionAndChallenge-2.png",
    },
    projectViewImageTwo: "/images/projects/spandoekman/showcase-2.png",
    interactions: [
      {
        avatar: "/images/projects/spandoekman/client-avatar.png",
        description: `wir sind in einer Zwickmühle! Unser Online Shop läuft seit 2011 ohne nennenswerte Updates. Es ist höchste Zeit für ein umfassendes Redesign. Um effektiv mit potenziellen Kunden in Kontakt zu treten, benötigen wir dringend einen überarbeiteten und wirkungsvollen Webshop-Auftritt. Können Sie uns bei diesem Unterfangen helfen?`,
        name: "Timo, Spandoekman",
        subject: "Hallo Syntech-Team,",
      },
      {
        avatar: null,
        description: `vielen Dank für deine Kontaktaufnahme! Es ist uns eine grosse Freude, dich und das Spandoekman.nl Team bei deiner Vision zu unterstützen. Dein Ziel passt perfekt zu dem, was wir hier bei Syntech Team grossartig machen. Wir haben Ihre Anfrage zur Kenntnis genommen und haben keine Zeit verschwendet, um deine Vision des Webshops zu verwirklichen. Wir freuen uns euch, Ihnen die Ergebnisse unten zu präsentieren. Seid gespannt, wenn wir euch euren brandneuen Shop präsentieren...`,
        name: "Syntech AG",
        subject: "Hallo Timo,",
      },
      {
        avatar: "/images/projects/spandoekman/client-avatar.png",
        description: `Hallo Syntech-Team,
        Wow, das sieht unglaublich aus! Es übertrifft unsere Erwartungen bei weitem. Obwohl wir große Hoffnungen hatten, habt ihr diese übertroffen und mehr geliefert, als wir uns vorstellen konnten. Vielen Dank für eure außergewöhnliche Arbeit. Wir sind bereit für den Start. Ein Hoch auf das gesamte Syntech-Team!
        Beste Grüße,`,
        name: "Timo, Spandoekman",
        subject: "Hi Syntech Team,",
      },
      {
        avatar: null,
        description: `Vielen Dank für deine netten Worte! Wir freuen uns sehr, dass du mit dem Ergebnis zufrieden bist. Es war uns eine Freude, mit dir zusammenzuarbeiten und deine Erwartungen zu übertreffen. Wir sind gespannt darauf, dein Projekt starten zu sehen, und wir sind hier, um dich auf jedem Schritt des Weges zu unterstützen.  
        Ein Hoch auf einen erfolgreichen Start und weiterhin viel Erfolg für deinen Online-Shop! 
        Beste Grüße,`,
        name: "Syntech AG",
        subject: "Hallo Timo,",
      },
    ],
  },
  {
    slug: "soxey",
    title: "Soxey",
    heroText: (
      <>Visuelle Präsentation der Website für den Online-Verkauf von Socken</>
    ),
    date: "2024-02",
    heroImage: "/images/projects/soxey/banner.png",
    heroInsideImage: "/images/projects/soxey/bannerInnerImage.png",
    heroTitle:"Visuelle Präsentation der Website für den Online-Verkauf von Socken",
    liveUrl: "Direkt sehen",
    services: ["UI UX Design", "Entwicklung"],
    productType: ["Website", "E-Commerce"],
    expertise: ["Frontend", "Shopify"],
    release: ["2024", "Feb"],
    mainChallenge: {
      title: "Entwicklung einer herausragenden Website in einem wettbewerbsintensiven Markt.",
      description:
        "In einem überfüllten Online-Markt ist es entscheidend, das Interesse potenzieller Kunden zu wecken. Socken, die in zahlreichen Stilen, Farben und Materialien erhältlich sind, stellen eine besondere Herausforderung dar. Die Präsentation dieser vielfältigen Produktpalette auf einer Website, ohne die Besucher zu überwältigen, erfordert eine sorgfältige Berücksichtigung von Layout, Kategorisierung und visueller Hierarchie.",
      imageUrl: "/images/projects/soxey/solutionAndChallenge-1.png",
    },
    ourSolution: {
      title: "Einfaches, modernes Design und benutzerfreundlich!",
      description:"Hochwertige Bilder und visuell ansprechende Grafiken werden verwendet, um Aufmerksamkeit zu erregen. Es wurde ein sauberes und modernes Design implementiert, das die Markenidentität widerspiegelt und die Benutzerfreundlichkeit in den Vordergrund stellt. Ausserdem wurden leistungsstarke Filter- und Sortieroptionen hinzugefügt, um den Kunden dabei zu helfen, ihre Auswahl nach Präferenzen wie Grösse, Farbe, Material und Stil einzugrenzen.",
      imageUrl: "/images/projects/soxey/solutionAndChallenge-2.png",
    },
    interactions: [
      {
        avatar: "/images/projects/soxey/client-avatar.png",
        description: `
        Wir stehen kurz davor, unseren aussergewöhnlichen Service für massgefertigte Socken bei Soxey zu launchen, wo Komfort und Stil im Mittelpunkt stehen! Um bei unserer Kundschaft Anklang zu finden, ist uns bewusst, wie wichtig eine ansprechende Online-Plattform ist. Könnt ihr uns dabei unterstützen, dieses Erlebnis zu gestalten?`,
        name: "Soxey Team",
        subject: "Hallo liebes Syntech-Team,",
      },
      {
        avatar: null,
        description: `
        Vielen Dank, dass du Syntech Solutions AG in Betracht ziehst! Wir freuen uns darauf, Soxey online zu präsentieren und Ihnen bei eventuellen Herausforderungen zu helfen. Auch wenn wir vielleicht nicht auf hoher See segeln, treibt uns unsere Leidenschaft für massgefertigte Socken an, und wir sind fest entschlossen, erstklassige Webentwicklung zu liefern. Lass uns gemeinsam etwas Besonderes schaffen!`,
        name: "Syntech AG",
        subject: "Hallo Soxey,",
      },
      {
        avatar: "/images/projects/soxey/client-avatar.png",
        description: `
        ich möchte mich kurz bei Ihnen für die hervorragende Arbeit bedanken, die Ihr Team bei der Gestaltung der Website meines Online-Sockengeschäfts geleistet hat. Nachdem ich die Gelegenheit hatte, die Designkonzepte zu überprüfen und zu sehen, wie die Website zum Leben erweckt wurde, bin ich sehr beeindruckt von der Kreativität, der Liebe zum Detail und der Professionalität, die während des gesamten Prozesses gezeigt wurde. Die Website verkörpert wirklich die Vision und Markenidentität, die ich mir vorgestellt hatte, und ich könnte mit dem Ergebnis nicht zufriedener sein.`,
        name: "Soxey Team",
        subject: "Hallo Syntech Team,",
      },
      {
        avatar: null,
        description: `
        Vielen Dank für Ihre freundlichen Worte und Ihr positives Feedback! Es freut uns sehr zu hören, dass Sie mit dem Design der Website Ihres Online-Sockengeschäfts zufrieden sind. Es war uns ein Vergnügen, während des gesamten Prozesses mit Ihnen zusammenzuarbeiten, und wir freuen uns, dass das Endergebnis mit Ihren Vorstellungen übereinstimmt und Ihre Erwartungen übertrifft. Ihr Enthusiasmus für das Projekt war wirklich inspirierend, und es war ein Privileg, mit Ihnen zusammenzuarbeiten, um Ihre Vision zum Leben zu erwecken.`,
        name: "Syntech AG",
        subject: "Hallo Soxey Team,",
      },
    ],
  },
  {
    slug: "qonsultant",
    title: "Qonsultant GmbH",
    heroText: (
      <>Beratung von Qonsultant für den Erfolg im Digitalen Zeitalter</>
    ),
    date: "2024-05-23",
    heroImage: "/images/projects/qonsultant/banner.png",
    heroInsideImage: "/images/projects/qonsultant/bannerInnerImage.png",
    heroTitle: "Beratung von Qonsultant für den Erfolg im Digitalen Zeitalter",
    liveUrl: "Direkt sehen",
    services: ["Design", "Entwicklung"],
    productType: ["Website", "Onepage"],
    expertise: ["Markenidentität", "UI design", "UX design"],
    release: ["Mai", "2024"],
    mainChallenge: {
      title: "Stärkung der KMU mit wirksamer Online- Repräsentation",
      description:
        "Im digitalen Zeitalter stehen Entwicklungsunternehmen vor der Herausforderung, ihr Fachwissen online wirksam zu präsentieren und sich gleichzeitig an die sich entwickelnden Trends und Technologien anzupassen. Das Gleichgewicht zwischen umfassenden Informationen, benutzerfreundlicher Navigation und visueller Attraktivität innerhalb der Grenzen einer digitalen Plattform stellt für diese Unternehmen eine grosse Herausforderung da.",
      imageUrl: "/images/projects/qonsultant/solutionAndChallenge-1.png",
    },
    ourSolution: {
      title: "Qonsultant GmbH: KMU-Befähigung Online",
      description:
        "Massgeschneidertes Web-Design: Die Qonsultant GmbH entwirft massgeschneiderte Websites für KMUs und sorgt für eine benutzerfreundliche Navigation und ansprechende Optik.    Fachkundiger Inhalt: Qonsultant GmbH kuratiert informative Inhalte, die KMUs wertvolle Einblicke gewähren. Nahtlose Integration: Die Qonsultant GmbH integriert assgeschneiderte Lösungen in ihre Website und bietet KMUs so einen einfachen Zugang zu Expertenrat. Laufende Unterstützung: Durch kontinuierliche Unterstützung stellen sie sicher, dass ihre Website eine verlässliche Ressource für KMU bleibt, die sich den Herausforderungen des digitalen Geschäftsumfelds stellen.",
      imageUrl: "/images/projects/qonsultant/solutionAndChallenge-2.png",
    },
    interactions: [
      {
        avatar: "/images/projects/qonsultant/client-avatar.png",
        description: `Wir sind gerade dabei, eine Unternehmensberatung namens Qonsultant GmbH zu gründen! Momentan haben wir nur die Registrierung geregelt. Das heisst, wir brauchen ein Branding, eine Website und eine Social Media Präsenz. Könnten Sie uns bei diesen wesentlichen Komponenten helfen? Wir freuen uns auf Ihre Unterstützung`,
        name: "Qonsultant Team",
        subject: "Hallo Syntech Team,",
      },
      {
        avatar: null,
        description: `Herzlichen Glückwunsch zum Start der Qonsultant GmbH! Wir freuen uns, von Ihrem neuen Projekt zu hören und würden uns freuen, Sie beim Branding, der Entwicklung einer Website und dem Aufbau einer starken Social-Media-Präsenz zu unterstützen. Lassen Sie uns einen Termin vereinbaren, um Ihr Konzept und Ihre Anforderungen im Detail zu besprechen und wie wir Ihre Ziele am besten unterstützen können.`,
        name: "Syntech AG",
        subject: "Hallo Qonsultant GmbH,",
      },
      {
        avatar: "/images/projects/qonsultant/client-avatar.png",
        description: `
        Vielen Dank für Ihre schnelle Antwort und Ihre Bereitschaft, bei der Gründung der Qonsultant GmbH zu helfen. Wir haben das Konzept gesehen, das Sie uns geschickt haben, und wir sind beeindruckt! Wir freuen uns auf die weitere Zusammenarbeit!`,
        name: "Qonsultant Team",
        subject: "Hallo Syntech Team,",
      },
      {
        avatar: null,
        description: `
        Aufregende Neuigkeiten! Die Vorbereitungen sind abgeschlossen, und wir sind bereit, die Qonsultant GmbH zu starten. Vielen Dank für das Vertrauen in das Syntech Team. Viel Erfolg bei allem! Denken Sie daran, wir sind nur einen Anruf entfernt, wenn Sie etwas brauchen..`,
        name: "Syntech AG",
        subject: "Hallo Qonsultant GmbH,",
      },
    ],
  },
  {
    slug: "ele-uznach",
    title: "ELE Uznach",
    heroText: <>Premium-Sonnenschutz und Garagentore: Die Lösung für Ihr Zuhause</>,
    date: "2024-05-24",
    heroImage: "/images/projects/ele-uznach/banner.png",
    heroInsideImage: "/images/projects/ele-uznach/bannerInnerImage.png",
    heroTitle: "Premium-Sonnenschutz und Garagentore: Die Lösung für Ihr Zuhause",
    liveUrl: "Direkt sehen",
    services: ["UI Design", "Entwicklung"],
    productType: ["Redesign", "E-commerce"],
    expertise: ["UI design", "Wordpress"],
    release: ["May", "2024"],
    mainChallenge: {
      title: "Erfüllung vielfältiger Bedürfnisse in unserem Serviceangebot",
      description:
        "Eine der Hauptherausforderungen bei der Neugestaltung der Website für Sonnen- und Garagentor-Lösungen könnte darin bestehen, das vielfältige Produktsortiment und die anpassbaren Optionen effektiv zu präsentieren und gleichzeitig eine benutzerfreundliche Erfahrung für die Besucher sicherzustellen.",
      imageUrl: "/images/projects/ele-uznach/solutionAndChallenge-1.png",
    },
    ourSolution: {
      title: "Unsere massgeschneiderten Lösungen für ELE Uznach",
      description:
        "Individuelle Anpassung: Wir bieten massgeschneiderte Lösungen an, die es unseren Kunden ermöglichen, aus einer Vielzahl von Designs und Stilen zu wählen, um ihre individuellen Wünsche zu erfüllen. Vielseitigkeit: Mit Optionen von Markisen bis zu Jalousien bieten wir Flexibilität bei der Anpassung der Beschattung und der Steuerung des natürlichen Lichteinfalls. Sicherheit und Ästhetik: Unsere Garagentore bieten Schutz und ein ansprechendes Erscheinungsbild und sind in verschiedenen Grössen, Stilen und mit unterschiedlichen Funktionsmechanismen erhältlich. Sicherung der Qualität: Die Zusammenarbeit mit erfahrenen Fachleuten und die Verwendung hochwertiger Materialien gewährleisten langlebige, zuverlässige Produkte, bei denen die Kundenzufriedenheit im Vordergrund steht.",
      imageUrl: "/images/projects/ele-uznach/solutionAndChallenge-2.png",
    },
    interactions: [
      {
        avatar: "/images/projects/ele-uznach/client-avatar.png",
        description: `
        Wir sind dabei, unsere aussergewöhnlichen Schönheits- und Wellness-Dienstleistungen bei ELE Uznach zu lancieren, wo Verzauberung und Selbstfürsorge im Mittelpunkt stehen! Um bei unseren Kunden Anklang zu finden, wissen wir um die Bedeutung einer fesselnden Online-Plattform. Können Sie uns dabei helfen, dieses Erlebnis zu gestalten?`,
        name: "ELE Uznach",
        subject: "Hallo Syntech Team,",
      },
      {
        avatar: null,
        description: `
        Vielen Dank für Ihr Interesse an Syntech Solutions AG! Wir freuen uns darauf, ELE Uznach online zu stellen und Sie bei der Bewältigung der anstehenden Herausforderungen zu unterstützen. Wir segeln zwar nicht auf den Weltmeeren, aber unsere Leidenschaft für Schönheit und Wellness treibt unser Engagement für erstklassige Webentwicklung an.Lassen Sie uns gemeinsam etwas Magisches schaffen!`,
        name: "Syntech AG",
        subject: "Hallo ELE Uznach",
      },
      {
        avatar: "/images/projects/ele-uznach/client-avatar.png",
        description: `Vielen Dank für die Präsentation Ihrer Offerte. Wir sind von Ihrem Ansatz und Ihrer Expertise begeistert. Lassen Sie uns die Vision von ELE UZNACH in die Tat umsetzen!`,
        name: "ELE Uznach",
        subject: "Hallo Syntech Team,",
      },
      {
        avatar: null,
        description: `
        Tolle Neuigkeiten! Es freut uns sehr zu hören, dass Sie mit unserem Vorschlag zufrieden sind! Lassen Sie uns gemeinsam damit beginnen, die Vision von ELE Uznach in die Tat umzusetzen!`,
        name: "Syntech AG",
        subject: "Hallo ELE Uznach,",
      },
    ],
  },
  {
    slug: "reputy-solutions",
    title: "Reputy Solutions",
    heroText: <>Reputy Solutions: Digitale Rufbildungen transformieren</>,
    date: "2024-03",
    heroImage: "/images/projects/reputy-solutions/banner.png",
    heroInsideImage: "/images/projects/reputy-solutions/bannerInnerImage.png",
    heroTitle: "Reputy Solutions: Digitale Rufbildungen transformieren",
    liveUrl: "Direkt sehen",
    services: ["UI UX Design", "Entwicklung"],
    productType: ["Website", "E-commerce"],
    expertise: ["Markenidentität", "UI design", "UX design"],
    release: ["March 2024"],
    mainChallenge: {
      title: "Die Positionierung von Reputy als führendes Unternehmen im Reputation Management",
      description:
        "Die Navigation durch die Wettbewerbslandschaft des Reputation Managements stellt die Herausforderung dar, Reputy als vertrauenswürdigen Branchenführer herauszustellen. Es erfordert die Präsentation von Fachkenntnissen, Engagement für Exzellenz und Anpassungsfähigkeit an sich entwickelnde Marktdynamiken, um seine Position im Feld zu festigen.",
      imageUrl: "/images/projects/reputy-solutions/solutionAndChallenge-1.png",
    },
    ourSolution: {
      title: "Pionierhafte Lösungen im Reputation Management",
      description:
        "Strategische Markenpositionierung: Wir haben eine einzigartige Identität für Reputy geschaffen und dabei den Schwerpunkt auf sein Engagement für Exzellenz im Reputation Management gelegt. Gezielte Online-Präsenz: Durch eine präzise digitale Strategie haben wir Reputys Online-Plattformen optimiert, um effektiv mit seinem Publikum zu interagieren. Innovative Angebote: Wir haben kreative Lösungen entwickelt, um Reputy als Branchenführer hervorzuheben. Kontinuierliche Verbesserung: Durch unsere agile Vorgehensweise stellen wir sicher, dass Reputy stets an vorderster Front im Reputation Management bleibt.",
      imageUrl: "/images/projects/reputy-solutions/solutionAndChallenge-2.png",
    },
    interactions: [
      {
        avatar: "/images/projects/reputy-solutions/client-avatar.png",
        description: `
        Wir freuen uns, unsere herausragenden Reputation Management Dienstleistungen bei Reputy zu launchen, wo Exzellenz und Innovation oberste Priorität haben! Da wir die Bedeutung einer ansprechenden Online-Plattform verstehen, könnt ihr uns bei der Gestaltung dieses Erlebnisses unterstützen?`,
        name: "Eldi Nazifi",
        subject: "Hallo Team Syntech,",
      },
      {
        avatar: null,
        description: `
        Das freut uns wirklich sehr! Wir sind begeistert von Ihrem Vorhaben im Bereich Reputation Management mit Reputy! Die Gestaltung einer ansprechenden Online-Plattform und der Aufbau einer starken Markenstrategie, die die Exzellenz von Reputy widerspiegelt, sind von entscheidender Bedeutung. Lassen Sie uns eng zusammenarbeiten, um diese Vision zum Leben zu erwecken und Ihre anspruchsvolle Kundschaft zu begeistern.`,
        name: "Syntech AG",
        subject: "Hallo Eldi,",
      },
      {
        avatar: "/images/projects/reputy-solutions/client-avatar.png",
        description: `Wir sind beeindruckt von Ihrem Vorschlag für unsere Fallstudie und freuen uns darauf, sie online zu präsentieren. Ihre Expertise wird zweifellos unsere Bemühungen im Reputation Management verbessern. Lassen Sie uns gemeinsam daran arbeiten, dieses Projekt zum Leben zu erwecken!`,
        name: "Eldi Nasufi",
        subject: "Hallo Team Syntech,",
      },
      {
        avatar: null,
        description: `Das sind grossartige Neuigkeiten! Vielen Dank, dass Sie unseren Vorschlag für Ihre Fallstudie in Betracht ziehen. Wir freuen uns über die Möglichkeit, sie online zu präsentieren und die Auswirkungen unserer Reputation Management Lösungen zu zeigen. Lassen Sie uns gemeinsam daran arbeiten, unsere Erfolgsgeschichte mit der Welt zu teilen!`,
        name: "Syntech AG",
        subject: "Hallo Eldi,",
      },
    ],
  },
  {
    slug: "facedrip",
    title: "FACEDRIP",
    heroText: (
      <>
        Facedrip <br /> Lass sie tröpfeln! <br /> Beauty-Face-eCommerce
      </>
    ),
    date: "2024-04",
    heroImage: "/images/projects/facedrip/banner.png",
    heroInsideImage: "/images/projects/facedrip/bannerInnerImage.png",
    heroTitle: "Facedrip Lass sie tröpfeln! Beauty-Face-eCommerce",
    liveUrl: "Direkt sehen",
    services: ["Design", "Entwicklung"],
    productType: ["Website", "E-commerce"],
    expertise: ["Markenidentität", "UI design", "UX design"],
    release: ["April 2024"],
    mainChallenge: {
      title: "Sich im wettbewerbsintensiven Schönheitsmarkt abheben",
      description:
        "Eine einzigartige Präsenz in der lebhaften Schönheitsbranche zu etablieren, stellt für FACEDRIP eine bedeutende Herausforderung dar. Angesichts des intensiven Wettbewerbs muss es seine Identität und Geschichte klar definieren, um herauszustechen, und sich gleichzeitig an sich wandelnde Trends und Verbraucherpräferenzen anpassen.",
      imageUrl: "/images/projects/facedrip/solutionAndChallenge-1.png",
    },
    ourSolution: {
      title: "Herausforderungen in der Schönheitsbranche meistern",
      description:
        "Unverwechselbare Markenidentität: Wir haben die einzigartige Identität von FACEDRIP entwickelt und dabei den verzaubernden Wellness-Ansatz betont, um herauszustechen.        Massgeschneiderte digitale Strategie: Wir haben einen individuellen Marketingplan erstellt, der die Zielgruppe von FACEDRIP auf verschiedenen Online-Plattformen anspricht und maximales Engagement erzielt. Fesselnde Online-Plattform: Unsere präzise Webentwicklung hat ein intuitives, visuell ansprechendes Erlebnis für FACEDRIP geschaffen und die Benutzerinteraktion verbessert. Kontinuierliche Unterstützung: Wir bieten fortlaufende Unterstützung, damit FACEDRIP sich an Veränderungen in der Branche anpassen und nachhaltiges Wachstum erzielen kann.",
      imageUrl: "/images/projects/facedrip/solutionAndChallenge-2.png",
    },
    interactions: [
      {
        avatar: "/images/projects/facedrip/client-avatar.png",
        description: `Wir stehen kurz vor dem Launch unserer aussergewöhnlichen Schönheits- und Wellness-Dienstleistungen bei FACEDRIP, wo Verzauberung und Selbstpflege im Mittelpunkt stehen! Um unsere Kunden anzusprechen, wissen wir, wie wichtig eine fesselnde Online-Plattform ist. Können Sie uns dabei unterstützen, dieses Erlebnis zu gestalten?`,
        name: "Merita Llumnica",
        subject: "Hallo Syntech-Team,",
      },
      {
        avatar: null,
        description: `Vielen Dank, dass Sie Syntech AG in Betracht ziehen! Wir freuen uns darauf, FACEDRIP online zu bringen und Ihnen bei allen anstehenden Herausforderungen zu helfen. Auch wenn wir vielleicht nicht die Meere befahren, treibt uns unsere Leidenschaft für Schönheit und Wellness dazu, erstklassige Webentwicklung zu liefern. Lassen Sie uns gemeinsam etwas Magisches schaffen!`,
        name: "Syntech AG",
        subject: "Hallo Merita,",
      },
      {
        avatar: "/images/projects/facedrip/client-avatar.png",
        description: `Vielen Dank für die Präsentation Ihres Vorschlags. Wir sind begeistert von Ihrem Ansatz und Ihrer Expertise. Lassen Sie uns gemeinsam damit beginnen, die Vision von FACEDRIP Wirklichkeit werden zu lassen!`,
        name: "Merita Llumnica",
        subject: "Hallo Syntech-Team,",
      },
      {
        avatar: null,
        description: `Das sind grossartige Neuigkeiten! Wir freuen uns zu hören, dass Sie mit unserem Vorschlag zufrieden sind! Lassen Sie uns gemeinsam damit beginnen, die Vision von FACEDRIP Wirklichkeit werden zu lassen!`,
        name: "Syntech AG",
        subject: "Hallo Merita,",
      },
    ],
  },
];