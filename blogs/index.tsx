import BlogImage1 from "../public/images/blogs/blog-image-1.png";
import BlogImage2 from "../public/images/blogs/blog-image-2.png";

export type Blog = {
  slug: string;
  heroTitle: string;
  heroText: string;
  content: any[];
};

export const blogsEnglish: Array<Blog> = [
  {
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
    heroTitle:
      "How Digital Receipt Data Can Enhance Card-Linked Loyalty Programs",
    heroText: `Crafting the perfect palette with Material Design and Figma`,
    content: [
      {
        type: "image",
        src: BlogImage1,
        alt: "Customer Identification Image",
      },
      {
        type: "p",
        text: "In today's competitive market, it's crucial for merchants to retain their customers and understand their purchase behaviour. One way to achieve this is by implementing a card-linked loyalty program, which provides a seamless and convenient way for customers to earn rewards while shopping. In addition, incorporating digital receipt data can further enhance the benefits of such programs by increasing identification rates and better understanding customer purchase behaviour.",
      },
      {
        type: "p",
        text: "Card-linked loyalty programs work by linking a customer's credit or debit card to a loyalty program account. When the customer uses their card to make a purchase at a participating merchant, they automatically earn loyalty rewards or cashback. This eliminates the need for physical loyalty cards or coupons, which can be easily lost or forgotten. With a card-linked program, customers can track their rewards and redemption options through a mobile app or online portal.",
      },
      {
        type: "p",
        text: "One of the major benefits of card-linked loyalty programs is the increased customer engagement and retention. With rewards automatically added to their account, customers are more likely to return to the participating merchants to earn more rewards. This builds a stronger relationship between the customer and the merchant, increasing customer loyalty and reducing churn. Receipt data can flow directly into customer data platforms (CDP) or customer relationship management (CRM) software.",
      },
      {
        type: "h3",
        text: "Customer identification against the payment transaction in the store",
      },
      {
        type: "image",
        src: BlogImage2,
        alt: "Customer Identification Image",
      },
      {
        type: "p",
        text: "Another advantage of card-linked programs is the ability to collect valuable data about customer purchasing behavior. By analyzing purchase data, merchants can identify which products are popular, which ones are not selling, and when customers are most likely to shop. This information can help merchants optimize their marketing strategies and improve their offerings, ultimately increasing revenue and customer satisfaction.",
      },
      {
        type: "p",
        text: "However, to fully realize the benefits of a card-linked loyalty program, it's essential to ensure that customers are properly identified and credited for their purchases. This is where digital receipt data comes into play. By incorporating digital receipts into the loyalty program platform, merchants can automatically track customer purchases and ensure that rewards are properly credited. This reduces the likelihood of errors and eliminates the need for manual intervention.",
      },
      {
        type: "p",
        text: "Digital receipts provide a wealth of data that can be used to better understand customer purchase behaviour. Merchants can analyze this data to identify purchasing patterns, such as the frequency of visits, purchase size, and preferred products. With this information, merchants can tailor their offerings and marketing strategies to better meet customer needs and preferences.",
      },
      {
        type: "p",
        text: "In summary card-linked loyalty programs offer a convenient and effective way to increase customer engagement and retention while collecting valuable data about customer purchase behaviour. By incorporating digital receipt data, merchants can improve identification rates, reduce errors, and gain deeper insights into their customers' preferences. As such, card-linked loyalty programs and digital receipt data can be powerful tools for businesses looking to increase revenue and customer satisfaction.",
      },
      {
        type: "h3",
        text: "Ditch the physical loyalty card",
      },
      {
        type: "p",
        text: "Quitty offers a technical solution within the retailers applications, enabling a better way to drive digital receipts back into their app as well as link the payment card to a loyalty ID number. For those retailers not having an application, Quitty offers a cost efficient universal iOS and Android app where retailers can enable card linked receipts and rewards for their customers.",
      },
      {
        type: "p",
        text: "When it comes to cardholder data, Quitty is a secure partner with PCI DSS Level certification. We already receive large amounts of cardholder data and follow strict payment regulations to keep it safe. As a retailer you will not need to store this data within your solution, all card data with Quitty. Our platform works with both Mastercard and Visa at a card network level but also with European payment partners such as Verifone, Worldline & Ingenico.",
      },
    ],
  },
];

export const blogsDeutsch: Array<Blog> = [
  {
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
    heroTitle:
      "Wie Daten von digitalen Quittungen kartengebundene Treueprogramme verbessern können",
    heroText: `Die perfekte Farbpalette mit Material Design und Figma erstellen`,
    content: [
      {
        type: "image",
        src: BlogImage1,
        alt: "Customer Identification Image",
      },
      {
        type: "p",
        text: "In der heutigen wettbewerbsintensiven Marktsituation ist es für Händler entscheidend, ihre Kunden zu binden und deren Kaufverhalten zu verstehen. Eine Möglichkeit, dies zu erreichen, ist die Implementierung eines kartengebundenen Treueprogramms, das den Kunden eine nahtlose und bequeme Möglichkeit bietet, beim Einkaufen Belohnungen zu sammeln. Darüber hinaus kann die Integration von digitalen Belegdaten die Vorteile solcher Programme weiter steigern, indem sie die Identifikationsraten erhöht und ein besseres Verständnis des Kaufverhaltens der Kunden ermöglicht.",
      },
      {
        type: "p",
        text: "Kartengebundene Treueprogramme funktionieren, indem die Kredit, oder Debitkarte eines Kunden mit einem Treuekonto verknüpft wird. Wenn der Kunde seine Karte bei einem teilnehmenden Händler für einen Einkauf verwendet, erhält er automatisch Treuebelohnungen oder Cashback. Dadurch entfällt die Notwendigkeit für physische Treuekarten oder Gutscheine, die leicht verloren gehen oder vergessen werden können. Mit einem kartengebundenen Programm können Kunden ihre Belohnungen und Einlösungsoptionen über eine mobile App oder ein Online-Portal verfolgen.",
      },
      {
        type: "p",
        text: "Einer der grössten Vorteile von kartengebundenen Treueprogrammen ist die erhöhte Kundenbindung und -interaktion. Da die Belohnungen automatisch dem Konto hinzugefügt werden, ist es wahrscheinlicher, dass Kunden zu den teilnehmenden Händlern zurückkehren, um mehr Belohnungen zu verdienen. Dies stärkt die Beziehung zwischen dem Kunden und dem Händler, erhöht die Kundenloyalität und verringert die Abwanderung. Die Empfangsdaten können direkt in Kunden-Datenplattformen(CDP) oder Customer Relationship Management(CRM) Software integriert werden.",
      },
      {
        type: "h2",
        text: "Kundenidentifikation anhand der Zahlungstransaktion im Geschäft",
      },
      {
        type: "image",
        src: BlogImage2,
        alt: "Customer Identification Image",
      },
      {
        type: "p",
        text: "Ein weiterer Vorteil von kartenbasierten Treueprogrammen ist die Möglichkeit, wertvolle Daten über das Kaufverhalten der Kunden zu sammeln. Durch die Analyse der Einkaufsdaten können Händler herausfinden, welche Produkte beliebt sind, welche weniger gut verkauft werden und zu welchen Zeiten Kunden am wahrscheinlichsten einkaufen. Diese Informationen helfen Händlern, ihre Marketingstrategien zu optimieren und ihr Angebot zu verbessern, was letztlich zu höheren Umsätzen und zufriedeneren Kunden führt.",
      },
      {
        type: "p",
        text: "Um die Vorteile eines kartenbasierten Treueprogramms vollständig zu nutzen, ist es entscheidend, sicherzustellen, dass Kunden korrekt identifiziert und ihre Einkäufe ordnungsgemäss erfasst werden. Hier kommt die digitale Quittungsdaten ins Spiel. Durch die Integration digitaler Quittungen in die Treueprogramm-Plattform können Händler die Einkäufe der Kunden automatisch verfolgen und sicherstellen, dass die Belohnungen korrekt gutgeschrieben werden. Dies verringert die Wahrscheinlichkeit von Fehlern und eliminiert den Bedarf an manuellen Eingriffen.",
      },
      {
        type: "p",
        text: "Digitale Quittungen liefern eine Fülle von Daten, die genutzt werden können, um das Kaufverhalten der Kunden besser zu verstehen. Händler können diese Daten analysieren, um Kaufmuster zu identifizieren, wie etwa die Häufigkeit von Besuchen, die Grösse der Einkäufe und bevorzugte Produkte. Mit diesen Informationen können Händler ihr Angebot und ihre Marketingstrategien anpassen, um besser auf die Bedürfnisse und Vorlieben der Kunden einzugehen.",
      },
      {
        type: "p",
        text: "Zusammenfassend bieten kartenbasierte Treueprogramme eine bequeme und effektive Möglichkeit, die Kundenbindung und Engagement zu steigern, während gleichzeitig wertvolle Daten über das Kaufverhalten der Kunden gesammelt werden. Durch die Integration von digitalen Quittungsdaten können Händler die Identifikationsraten verbessern, Fehler reduzieren und tiefere Einblicke in die Vorlieben ihrer Kunden gewinnen. Daher können kartenbasierte Treueprogramme und digitale Quittungsdaten mächtige Werkzeuge für Unternehmen sein, die ihren Umsatz und die Kundenzufriedenheit steigern möchten.",
      },
      {
        type: "h3",
        text: "Verabschiede dich von der physischen Treuekarte.",
      },
      {
        type: "p",
        text: "Quitty bietet eine technische Lösung innerhalb der Anwendungen der Einzelhändler, die eine bessere Möglichkeit bietet, digitale Belege in ihre App zurückzuführen und die Zahlungskarte mit einer Treue-ID-Nummer zu verknüpfen. Für Einzelhändler ohne eigene App bietet Quitty eine kostengünstige, universelle iOS- und Android-App, mit der Einzelhändler kartengebundene Belege und Belohnungen für ihre Kunden aktivieren können.",
      },
      {
        type: "p",
        text: "Was die Kartendaten betrifft, ist Quitty ein sicherer Partner mit PCI DSS Level-Zertifizierung. Wir empfangen bereits große Mengen an Kartendaten und halten uns an strenge Zahlungsrichtlinien, um diese sicher zu speichern. Als Einzelhändler müssen Sie diese Daten nicht in Ihrer Lösung speichern – alle Kartendaten verbleiben bei Quitty. Unsere Plattform arbeitet sowohl mit Mastercard und Visa auf Kartenetzwerkebene als auch mit europäischen Zahlungsdienstleistern wie Verifone, Worldline und Ingenico.",
      },
    ],
  },
];
