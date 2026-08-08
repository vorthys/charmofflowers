/* Charm of Flowers — čeština / українська
   ------------------------------------------------------------------
   Všechny texty stránky jsou na jednom místě, v tomhle slovníku.
   V HTML jsou jen klíče:
     data-i18n="klic"        → textContent
     data-i18n-html="klic"   → innerHTML (jen tam, kde je uvnitř značka)
     data-i18n-alt="klic"    → alt
     data-i18n-aria="klic"   → aria-label
     data-i18n-title="klic"  → title
     data-i18n-ph="klic"     → placeholder
   Úprava textu = úprava jednoho řádku níž, ne hledání po šabloně.   */
(function () {
  'use strict';

  var DICT = {
    cs: {
      /* --- hlava dokumentu --- */
      docTitle: 'Charm of Flowers — květinářství v Plzni | Kytice na míru a rozvoz',
      docDesc: 'Květinářství Charm of Flowers na Pražské 43 v Plzni. Kytice na míru, svatební floristika, kurzy vázání a rozvoz květin po Plzni každý den od 9:00 do 20:00.',
      ogLocale: 'cs_CZ',

      /* --- navigace --- */
      zaDocTitle: 'Záloha a QR platba — Charm of Flowers',
      zaDocDesc: 'Zaplaťte zálohu nebo objednávku u Charm of Flowers naskenováním QR kódu. Platba přímo na účet, bez poplatků.',
      zaEyebrow: 'Platba',
      zaTitle: 'Záloha a QR platba',
      zaLede: 'Naskenujte kód v aplikaci své banky — částka, účet i zpráva se vyplní samy. Platí se běžným převodem, bez jakýchkoli poplatků navíc.',
      zaDownload: 'Stáhnout QR obrázek',
      zaQuickL: 'Rychlá volba',
      zaQuick500: 'Záloha 500 Kč',
      zaAmount: 'Částka v Kč',
      zaMsg: 'Zpráva pro příjemce',
      zaMsgHint: 'Napište sem své jméno — podle něj poznáme, čí objednávka to je.',
      zaMsgWarn: 'Banky ve zprávě přečtou jen latinku bez háčků — napište jméno bez diakritiky.',
      zaAcc: 'Číslo účtu',
      zaOwner: 'Majitel účtu',
      zaNoJs: 'QR kód se vykresluje v prohlížeči a potřebuje JavaScript. Můžete poslat běžný převod na účet 5391596093/0800.',
      zaNote: 'Záloha 500 Kč platí u objednávek na míru — svatby, velké vazby a kurzy. Zbytek doplatíte při převzetí. Peníze chodí přímo na účet studia, platbu nikde neevidujeme a QR kód žádná třetí strana nevidí.',
      zaHowEyebrow: 'Jak zaplatit',
      zaHowTitle: 'Tři kroky',
      za1T: 'Otevřete aplikaci banky',
      za1P: 'V mobilním bankovnictví najděte „Platba QR kódem" — má ji Česká spořitelna, ČSOB, KB, Air Bank, Fio, Moneta i Revolut.',
      za2T: 'Naskenujte kód',
      za2P: 'Účet, částka i zpráva se doplní samy. Nic nepřepisujete, takže nehrozí překlep v čísle účtu.',
      za3T: 'Potvrďte platbu',
      za3P: 'Hotovo. Ozvěte se nám na Instagram nebo telefon, ať víme, že je záloha na cestě.',
      zaBackBtn: 'Zpět na objednávku',
      katDocTitle: 'Katalog kytic — Charm of Flowers Plzeň',
      katDocDesc: 'Katalog kytic květinářství Charm of Flowers v Plzni. Kytice do 1 000 Kč i autorské vazby od 2 000 Kč, boxy, svatební floristika. Rozvoz po Plzni od 30 do 60 minut.',

      skip: 'Přejít k obsahu',
      logoAria: 'Charm of Flowers — úvod',
      navHome: 'Domů',
      navCatalog: 'Katalog',
      menuAria: 'Menu',
      navAria: 'Hlavní navigace',
      langAria: 'Volba jazyka',

      /* --- hero --- */
      heroEyebrow: 'Květinářství · Pražská 43, Plzeň',
      heroH1: 'Charm of Flowers — květinářství v Plzni',
      heroLede: 'Každá kytice má svůj příběh.',
      heroSub: 'Vážeme na míru — od malé kytice do bytu po svatební výzdobu. Co nestihnete vyzvednout, přivezeme.',
      heroCta1: 'Nezávazná poptávka',
      heroCta2: 'Zavolat 723 477 375',
      fact1L: 'Obchod',
      fact1V: 'Po–So 9:00–18:00 · Ne 10:00–15:00',
      fact2L: 'Rozvoz po Plzni',
      fact2V: 'denně 9:00–20:00 · obvykle do 30–60 minut',
      fact3L: 'Domluvíme se',
      fact3V: 'česky · anglicky · ukrajinsky',
      heroCap: 'Hortenzie · sezónní kytice',
      heroAlt: 'Dvě kytice modrých hortenzií zabalené v bílém papíru',

      /* --- služby --- */
      svcEyebrow: 'Co u nás pořídíte',
      svcTitle: 'Proč zajít na Pražskou',
      svc1T: 'Kytice na míru',
      svc1P: 'Řekněte nám příležitost a rozpočet — zbytek vymyslíme. Vážeme z toho, co je zrovna nejčerstvější.',
      svc2T: 'Svatební floristika',
      svc2P: 'Svatební kytice, korsáže, výzdoba obřadu i tabule. Termíny rezervujeme s předstihem, ozvěte se včas.',
      svc3T: 'Kurzy a workshopy',
      svc3P: 'Naučíme vás vázat. Pro začátečníky, party i firmy — ve skupině nebo jeden na jednoho.',
      svc4T: 'Rozvoz po Plzni',
      svc4P: 'Vozíme každý den od 9:00 do 20:00. Čas doručení si zarezervujete dopředu, ať kytice dorazí ve správnou chvíli.',
      svc5T: 'Květinové předplatné',
      svc5P: 'Kytice pravidelně domů, do kanceláře nebo jako dárek — 2–4× měsíčně. Velikosti S 750 / M 1 200 / L 1 500 Kč.',
      svcAlt: 'Podzimní kytice z růží, karafiátů a eukalyptu převázaná hedvábnou stuhou',

      /* --- ceník --- */
      budEyebrow: 'Jak si objednat',
      budTitle: 'Stačí nám rozpočet',
      budLede: 'Nemusíte vybírat konkrétní květiny. Řekněte, kolik chcete utratit a pro koho kytice je — složíme ji z toho nejlepšího, co ten den máme.',
      t1C: 'Malá pozornost',
      t1V: 'do 1 000 Kč',
      t1P: 'Kytice na návštěvu, do bytu nebo jen tak. Rychle a bez objednávky předem.',
      t2C: 'Nejčastější volba',
      t2V: '1 000 – 2 000 Kč',
      t2P: 'Narozeniny, výročí, poděkování. Velikost, u které se většina zákazníků zastaví.',
      t3C: 'Autorská kytice',
      t3V: 'od 2 000 Kč',
      t3P: 'Velké vazby a květinové boxy, které jsou vidět už ode dveří. Rozvoz po Plzni zdarma.',
      order: 'Objednat',

      prT: 'Kompletní ceník',
      pr1: 'Kytice z denní nabídky', pr1v: 'do 1 000 Kč',
      pr2: 'Kytice na přání', pr2v: '1 000 – 2 000 Kč',
      pr3: 'Autorská kytice, květinový box', pr3v: 'od 2 000 Kč',
      pr4: 'Svatební kytice', pr4v: 'individuálně',
      pr5: 'Výzdoba svatby či akce', pr5v: 'individuálně',
      pr6: 'Kurz vázání, workshop', pr6v: 'na dotaz',
      pr7: 'Rozvoz po Plzni (9–20 h)', pr7v: 'od 2 000 Kč zdarma · jinak dle vzdálenosti',
      pr8: 'Květinové předplatné (2–4× měsíčně)', pr8v: 'S 750 · M 1 200 · L 1 500 Kč',
      prNote: 'Přesnou cenu vždy potvrdíme předem — telefonicky nebo ve formuláři níže.',

      /* --- galerie --- */
      galEyebrow: 'Instagram',
      galLede: 'Nejnovější kytice přidáváme na Instagram — tady je posledních šest z dílny.',
      igFollow: 'Sledovat na Instagramu',
      igUpd: 'galerie se obnovuje automaticky · aktualizováno',
      zoom: 'Zvětšit fotku',
      g1: 'Velká kytice růžových pivoňkových růží před vchodem do květinářství',
      g3: 'Nevěsta se svatební kyticí z krémových růží',
      g4: 'Květinový box Charm of Flowers s růžemi, hortenzií a gerberami',
      g5: 'Kytice z anthurií, růží a kopretin před vchodem do květinářství',
      g6: 'Svatební kytice z bílých eustom a eukalyptu v rukou nevěsty',
      g10: 'Velká pastelová kytice z růží a karafiátů — koláž se záběrem páru s bílou kyticí',

      /* --- katalog --- */
      katEyebrow: 'Katalog',
      katTitle: 'Vyberte si kytici',
      katLede: 'Ceny jsou orientační — každá kytice je originál z toho, co je ten den nejčerstvější. Vyberte fotku, pošlete poptávku a my se ozveme.',
      chipsAria: 'Filtr katalogu',
      katNote: 'Každá kytice je originál — složení se mění podle sezóny a denní nabídky, fotky jsou ilustrační. Styl a barevnost vždy zachováme.',
      stepsEyebrow: 'Jak to funguje',
      stepsTitle: 'Objednávka ve třech krocích',
      st1T: 'Vyberte si',
      st1P: 'Z katalogu, z Instagramu, nebo jen řekněte rozpočet a příležitost — zbytek vymyslíme.',
      st2T: 'Zavolejte nebo napište',
      st2P: 'Telefon 723 477 375, zpráva na Instagramu, nebo poptávkový formulář. Domluvíme detaily a cenu.',
      st3T: 'Vyzvednete, nebo doručíme',
      st3P: 'Na Pražské 43, nebo rozvoz po Plzni a okolí — šetrně a s péčí, od 30 do 60 minut. Od 2 000 Kč po Plzni zdarma.',
      katFormBtn: 'Poslat poptávku',
      katIgBtn: 'Aktuální kytice na Instagramu',
      katLinkBtn: 'Prohlédnout katalog kytic',

      /* --- recenze --- */
      rvEyebrow: 'Co říkají zákazníci',
      rvTitle: 'Recenze',
      gRating: '4,9',
      gCount: '137',
      gLabel: 'recenzí na Googlu',
      rv1: '„Kytice odsud dostávám opakovaně a vždy potěší krásou a čerstvostí. Moc příjemná majitelka — poradí, složí kytici na míru a zařídí doručení. Doporučuji!"',
      rv1src: 'Google · 5 ★ · překlad',
      rv2: '„Hodně cestuji a služeb využívám spoustu — ale to, jak tady přistupují k řemeslu, mě nadchlo. Kytice dělají s neuvěřitelnou duší, teplem a vkusem."',
      rv2src: 'Google · 5 ★ · překlad',
      rv3: '„Objednávka rychle, doručení přesně na čas a kytice vypadala ještě líp než na fotce. Květiny čerstvé, krásně naaranžované — obdarovaná byla nadšená."',
      rv3src: 'Google · 5 ★ · překlad',

      /* --- příběh --- */
      stEyebrow: 'Příběh za jménem',
      stTitle: 'Květinářství, které začalo podruhé',
      stP1: 'Charm of Flowers vede <strong>Nataliia Ivasiuk</strong>. Vlastní květinářství měla už na Ukrajině — než ho kvůli válce musela nechat za sebou.',
      stP2: 'S manželem našli nový domov v Plzni. Nataliia tu nejdřív pracovala v místním květinářství a pak si otevřela svoje vlastní, od nuly a podruhé v životě.',
      stQ: 'Proto má u nás každá kytice svůj příběh. O odvaze začít znovu — a o tom, že krása umí vyrůst i po těžkých zkouškách.',
      stN1: 'otevření v Plzni',
      stN2: 'kytic na Instagramu',
      stN3: 'jazyky za pultem',
      stAlt: 'Floristka za pultem prodejny se dvěma kyticemi ze slunečnic',

      /* --- FAQ --- */
      faqEyebrow: 'Než se zeptáte',
      faqTitle: 'Časté dotazy',
      q1: 'Jak rychle uvážete kytici?',
      a1: 'Zavolejte nebo napište — domluvíme se, kdy bude kytice připravená. U větších vazeb a květinových boxů počítejte raději den či dva dopředu.',
      q2: 'Rozvážíte květiny v konkrétní čas?',
      a2: 'Ano, rozvážíme po Plzni a okolí každý den od 9:00 do 20:00 — obvykle do 30 až 60 minut. Při objednávce od 2 000 Kč je rozvoz po Plzni zdarma, jinak cenu potvrdíme podle vzdálenosti.',
      q3: 'Kdy se ozvat kvůli svatební kytici?',
      a3: 'Čím dřív, tím líp — termíny rezervujeme s předstihem. Na konzultaci probereme styl, barvy i výzdobu obřadu a tabule.',
      q4: 'Domluvím se u vás ukrajinsky nebo anglicky?',
      a4: 'Ano. Domluvíte se česky, anglicky i ukrajinsky — v obchodě, po telefonu i na Instagramu.',
      q6: 'Platí se u větších objednávek záloha?',
      a6: 'Ano, u zakázek na míru — svatby, velké vazby a kurzy — vybíráme zálohu 500 Kč. Zaplatíte ji za pár vteřin naskenováním <a href="zaloha">QR kódu</a>, zbytek doplatíte při převzetí.',
      q5: 'Jak probíhají kurzy vázání?',
      a5: 'Vážeme ve skupině i jeden na jednoho — pro začátečníky, party i firmy. Aktuální termíny najdete na našem Instagramu, nebo se ozvěte.',

      /* --- kontakt + formulář --- */
      coEyebrow: 'Kde nás najdete',
      coTitle: 'Pražská 43, kousek od náměstí',
      coAddrT: 'Adresa',
      coAddr: 'Pražská 38/43<br>301 00 Plzeň 3 — Východní Předměstí',
      coMap: 'Otevřít v mapě',
      coHoursT: 'Otevírací doba',
      coRow1: 'Pondělí – sobota',
      coRow1V: '9:00 – 18:00',
      coRow2: 'Neděle',
      coRow2V: '10:00 – 15:00',
      coRow3: 'Rozvoz po Plzni',
      coRow3V: 'denně 9:00 – 20:00',
      coOrderT: 'Objednávky',
      coNote: 'Voláme i píšeme zpátky — telefonicky, na Instagramu i na Facebooku.',
      coFollowT: 'Sledujte nás',
      coLinks: 'Všechny odkazy',
      mapTitle: 'Mapa — Charm of Flowers, Pražská 38/43, Plzeň',

      fmT: 'Nezávazná poptávka',
      fmNote: 'Napište, co slavíte a kolik chcete utratit. Ozveme se s návrhem — telefonicky nebo zprávou.',
      fmName: 'Jméno',
      fmPhone: 'Telefon',
      fmDate: 'Na kdy',
      fmBudget: 'Rozpočet',
      fmMsg: 'Vzkaz',
      fmMsgPh: 'Co slavíte, jaké barvy má ráda, kam doručit…',
      fmOpt1: 'do 1 000 Kč',
      fmOpt2: '1 000 – 2 000 Kč',
      fmOpt3: 'od 2 000 Kč',
      fmOpt4: 'svatba — individuálně',
      fmOpt5: 'květinové předplatné',
      fmOpt6: 'ještě nevím',
      fmSend: 'Odeslat poptávku',
      fmOk: 'Děkujeme! Poptávka odešla — ozveme se co nejdřív.',

      /* --- chat --- */
      chatAria: 'Napište nám',
      chatT: 'Napište nám',
      chatSub: 'Odpovídáme během otevírací doby, obvykle do pár minut.',
      chatLive: 'Živý chat',
      chatCall: 'Zavolat 723 477 375',
      chatForm: 'Poptávkový formulář',
      chatBtn: 'Napište nám',
      fCena: 'Cena',
      fPrilez: 'Příležitost',

      /* --- patička --- */
      ftShop: 'Prodejna',
      ftContact: 'Kontakt',
      ftSocial: 'Sítě',
      toTop: 'Zpět nahoru',

      /* --- lightbox a lišta --- */
      lbAria: 'Prohlížeč fotek',
      lbClose: 'Zavřít',
      lbPrev: 'Předchozí fotka',
      lbNext: 'Další fotka',
    },

    uk: {
      zaDocTitle: 'Аванс та оплата за QR — Charm of Flowers',
      zaDocDesc: 'Оплатіть аванс або замовлення у Charm of Flowers, відсканувавши QR-код. Платіж прямо на рахунок, без комісій.',
      zaEyebrow: 'Оплата',
      zaTitle: 'Аванс та оплата за QR',
      zaLede: 'Відскануйте код у застосунку свого банку — сума, рахунок і повідомлення заповняться самі. Це звичайний переказ, без жодних додаткових комісій.',
      zaDownload: 'Зберегти QR-зображення',
      zaQuickL: 'Швидкий вибір',
      zaQuick500: 'Аванс 500 Kč',
      zaAmount: 'Сума в Kč',
      zaMsg: 'Повідомлення отримувачу',
      zaMsgHint: 'Напишіть тут своє ім\'я — так ми зрозуміємо, чиє це замовлення.',
      zaMsgWarn: 'Банки читають у повідомленні лише латиницю — напишіть ім\'я латинськими літерами.',
      zaAcc: 'Номер рахунку',
      zaOwner: 'Власник рахунку',
      zaNoJs: 'QR-код малюється у браузері й потребує JavaScript. Ви можете зробити звичайний переказ на рахунок 5391596093/0800.',
      zaNote: 'Аванс 500 Kč діє для замовлень на замовлення — весілля, великі композиції та курси. Решту доплачуєте при отриманні. Гроші йдуть прямо на рахунок студії, платіж ніде не зберігається, і QR-код не бачить жодна третя сторона.',
      zaHowEyebrow: 'Як оплатити',
      zaHowTitle: 'Три кроки',
      za1T: 'Відкрийте застосунок банку',
      za1P: 'У мобільному банку знайдіть «Платіж за QR-кодом» — він є у Česká spořitelna, ČSOB, KB, Air Bank, Fio, Moneta та Revolut.',
      za2T: 'Відскануйте код',
      za2P: 'Рахунок, сума й повідомлення заповняться самі. Нічого не переписуєте, тож помилитися в номері рахунку неможливо.',
      za3T: 'Підтвердьте платіж',
      za3P: 'Готово. Напишіть нам в Instagram або зателефонуйте, щоб ми знали, що аванс у дорозі.',
      zaBackBtn: 'Повернутись до замовлення',
      katDocTitle: 'Каталог букетів — Charm of Flowers Пльзень',
      katDocDesc: 'Каталог букетів квіткової студії Charm of Flowers у Пльзні. Букети до 1 000 Kč та авторські композиції від 2 000 Kč, коробки, весільна флористика. Доставка за 30–60 хвилин.',
      navCatalog: 'Каталог',
      docTitle: 'Charm of Flowers — квіти у Пльзні | Букети на замовлення та доставка',
      docDesc: 'Квіткова студія Charm of Flowers на Pražská 43 у Пльзні. Букети на замовлення, весільна флористика, курси в’язання та доставка квітів по Пльзні щодня з 9:00 до 20:00.',
      ogLocale: 'uk_UA',

      skip: 'Перейти до вмісту',
      logoAria: 'Charm of Flowers — на початок',
      navHome: 'Головна',
      menuAria: 'Меню',
      navAria: 'Головна навігація',
      langAria: 'Вибір мови',

      heroEyebrow: 'Квіткова студія · Pražská 43, Пльзень',
      heroH1: 'Charm of Flowers — квіткова студія у Пльзні',
      heroLede: 'Кожен букет має свою історію.',
      heroSub: 'В’яжемо на замовлення — від невеликого букета додому до весільного оформлення. Що не встигнете забрати, привеземо.',
      heroCta1: 'Залишити запит',
      heroCta2: 'Подзвонити 723 477 375',
      fact1L: 'Студія',
      fact1V: 'Пн–Сб 9:00–18:00 · Нд 10:00–15:00',
      fact2L: 'Доставка по Пльзні',
      fact2V: 'щодня 9:00–20:00 · зазвичай за 30–60 хвилин',
      fact3L: 'Спілкуємось',
      fact3V: 'чеською · англійською · українською',
      heroCap: 'Гортензії · сезонний букет',
      heroAlt: 'Два букети блакитних гортензій, загорнуті в білий папір',

      svcEyebrow: 'Що у нас є',
      svcTitle: 'Чому варто завітати до нас',
      svc1T: 'Букети на замовлення',
      svc1P: 'Скажіть привід і бюджет — решту придумаємо. В’яжемо з того, що зараз найсвіжіше.',
      svc2T: 'Весільна флористика',
      svc2P: 'Весільні букети, бутоньєрки, оформлення церемонії та столів. Дату бронюємо заздалегідь, пишіть завчасно.',
      svc3T: 'Курси та воркшопи',
      svc3P: 'Навчимо вас в’язати. Для початківців, компаній і корпоративів — у групі або індивідуально.',
      svc4T: 'Доставка по Пльзні',
      svc4P: 'Возимо щодня з 9:00 до 20:00. Час доставки бронюєте наперед, щоб букет приїхав вчасно.',
      svc5T: 'Квіткова підписка',
      svc5P: 'Букети регулярно — додому, в офіс або на подарунок, 2–4 рази на місяць. Розміри S 750 / M 1 200 / L 1 500 Kč.',
      svcAlt: 'Осінній букет із троянд, гвоздик та евкаліпта, перев’язаний шовковою стрічкою',

      budEyebrow: 'Як замовити',
      budTitle: 'Достатньо назвати бюджет',
      budLede: 'Не треба обирати конкретні квіти. Скажіть, скільки хочете витратити і для кого букет — складемо його з найкращого, що є того дня.',
      t1C: 'Невеликий знак уваги',
      t1V: 'до 1 000 Kč',
      t1P: 'Букет у гості, додому або просто так. Швидко й без попереднього замовлення.',
      t2C: 'Найчастіший вибір',
      t2V: '1 000 – 2 000 Kč',
      t2P: 'День народження, річниця, подяка. Розмір, на якому зупиняється більшість.',
      t3C: 'Авторський букет',
      t3V: 'від 2 000 Kč',
      t3P: 'Великі композиції та квіткові коробки, які видно вже від дверей. Доставка по Пльзні безкоштовна.',
      order: 'Замовити',

      prT: 'Повний прайс',
      pr1: 'Букет із денної пропозиції', pr1v: 'до 1 000 Kč',
      pr2: 'Букет на замовлення', pr2v: '1 000 – 2 000 Kč',
      pr3: 'Авторський букет, квіткова коробка', pr3v: 'від 2 000 Kč',
      pr4: 'Весільний букет', pr4v: 'індивідуально',
      pr5: 'Оформлення весілля чи події', pr5v: 'індивідуально',
      pr6: 'Курс в’язання, воркшоп', pr6v: 'за запитом',
      pr7: 'Доставка по Пльзні (9–20)', pr7v: 'від 2 000 Kč безкоштовно · інакше за відстанню',
      pr8: 'Квіткова підписка (2–4 на місяць)', pr8v: 'S 750 · M 1 200 · L 1 500 Kč',
      prNote: 'Точну ціну завжди підтверджуємо заздалегідь — телефоном або у формі нижче.',

      galEyebrow: 'Instagram',
      galLede: 'Найновіші букети додаємо в Instagram — ось останні шість з майстерні.',
      igFollow: 'Стежити в Instagram',
      igUpd: 'галерея оновлюється автоматично · оновлено',
      zoom: 'Збільшити фото',
      g1: 'Великий букет рожевих півонієвих троянд перед входом до квіткової студії',
      g3: 'Наречена з весільним букетом із кремових троянд',
      g4: 'Квіткова коробка Charm of Flowers із трояндами, гортензією та герберами',
      g5: 'Букет з антуріумів, троянд і ромашок перед входом до квіткової студії',
      g6: 'Весільний букет із білих еустом та евкаліпта в руках нареченої',
      g10: 'Великий пастельний букет із троянд і гвоздик — колаж із кадром пари з білим букетом',

      katEyebrow: 'Каталог',
      katTitle: 'Оберіть букет',
      katLede: 'Ціни орієнтовні — кожен букет оригінальний, з найсвіжішого того дня. Оберіть фото, надішліть запит — і ми відповімо.',
      chipsAria: 'Фільтр каталогу',
      katNote: 'Кожен букет — оригінал: склад змінюється залежно від сезону та денної пропозиції, фото ілюстративні. Стиль і кольори завжди збережемо.',
      stepsEyebrow: 'Як це працює',
      stepsTitle: 'Замовлення у три кроки',
      st1T: 'Оберіть',
      st1P: 'З каталогу, з Instagram, або просто назвіть бюджет і привід — решту придумаємо.',
      st2T: 'Подзвоніть або напишіть',
      st2P: 'Телефон 723 477 375, повідомлення в Instagram або форма запиту. Узгодимо деталі й ціну.',
      st3T: 'Заберіть або доставимо',
      st3P: 'На Pražská 43, або доставка по Пльзні та околицях — дбайливо, від 30 до 60 хвилин. Від 2 000 Kč по Пльзні безкоштовно.',
      katFormBtn: 'Надіслати запит',
      katIgBtn: 'Актуальні букети в Instagram',
      katLinkBtn: 'Переглянути каталог букетів',

      rvEyebrow: 'Що кажуть клієнти',
      rvTitle: 'Відгуки',
      gRating: '4,9',
      gCount: '137',
      gLabel: 'відгуків у Google',
      rv1: '«Не вперше отримую букети звідси — завжди тішать красою та свіжістю. Дуже приємна власниця: порадить, складе букет під потреби й організує доставку. Рекомендую!»',
      rv1src: 'Google · 5 ★ · переклад',
      rv2: '«Багато подорожую і користуюся різними сервісами — але те, як тут ставляться до ремесла, захоплює. Букети роблять з неймовірною душею, теплом і смаком.»',
      rv2src: 'Google · 5 ★ · переклад',
      rv3: '«Замовлення швидко, доставка точно вчасно, а букет виглядав навіть краще, ніж на фото. Квіти свіжі, гарно оформлені — отримувачка була в захваті.»',
      rv3src: 'Google · 5 ★ · переклад',

      stEyebrow: 'Історія за назвою',
      stTitle: 'Квіткова студія, що почалася вдруге',
      stP1: 'Charm of Flowers веде <strong>Наталія Івасюк</strong>. Власну квіткову студію вона мала ще в Україні — доки не довелося залишити її через війну.',
      stP2: 'З чоловіком вони знайшли новий дім у Пльзні. Наталія спершу працювала в місцевій крамниці, а потім відкрила власну студію — з нуля і вдруге в житті.',
      stQ: 'Тому кожен наш букет має свою історію. Про сміливість почати заново — і про те, що краса вміє вирости навіть після важких випробувань.',
      stN1: 'відкриття у Пльзні',
      stN2: 'букетів в Instagram',
      stN3: 'мови за прилавком',
      stAlt: 'Флористка за прилавком студії з двома букетами із соняшників',

      faqEyebrow: 'Перш ніж спитати',
      faqTitle: 'Часті запитання',
      q1: 'Як швидко зв’яжете букет?',
      a1: 'Подзвоніть або напишіть — домовимось, коли букет буде готовий. Для великих композицій і квіткових коробок краще день-два наперед.',
      q2: 'Чи доставляєте квіти на конкретний час?',
      a2: 'Так, розвозимо по Пльзні та околицях щодня з 9:00 до 20:00 — зазвичай за 30–60 хвилин. Від 2 000 Kč доставка по Пльзні безкоштовна, інакше ціну підтвердимо за відстанню.',
      q3: 'Коли звертатися щодо весільного букета?',
      a3: 'Що раніше, то краще — дати бронюємо заздалегідь. На консультації обговоримо стиль, кольори та оформлення церемонії і столів.',
      q4: 'Чи можна спілкуватися українською або англійською?',
      a4: 'Так. Спілкуємось чеською, англійською та українською — у студії, телефоном і в Instagram.',
      q6: 'Чи потрібен аванс за великі замовлення?',
      a6: 'Так, для замовлень на замовлення — весілля, великі композиції та курси — ми беремо аванс 500 Kč. Оплатите його за кілька секунд, відсканувавши <a href="zaloha">QR-код</a>, решту доплатите при отриманні.',
      q5: 'Як проходять курси в’язання?',
      a5: 'В’яжемо у групі або індивідуально — для початківців, компаній і фірм. Актуальні дати на нашому Instagram, або напишіть нам.',

      coEyebrow: 'Де нас знайти',
      coTitle: 'Pražská 43, поруч із площею',
      coAddrT: 'Адреса',
      coAddr: 'Pražská 38/43<br>301 00 Пльзень 3 — Východní Předměstí',
      coMap: 'Відкрити на карті',
      coHoursT: 'Години роботи',
      coRow1: 'Понеділок – субота',
      coRow1V: '9:00 – 18:00',
      coRow2: 'Неділя',
      coRow2V: '10:00 – 15:00',
      coRow3: 'Доставка по Пльзні',
      coRow3V: 'щодня 9:00 – 20:00',
      coOrderT: 'Замовлення',
      coNote: 'Передзвонюємо й відповідаємо — телефоном, в Instagram і на Facebook.',
      coFollowT: 'Стежте за нами',
      coLinks: 'Усі посилання',
      mapTitle: 'Карта — Charm of Flowers, Pražská 38/43, Пльзень',

      fmT: 'Запит без зобов’язань',
      fmNote: 'Напишіть, що святкуєте і скільки хочете витратити. Відповімо з пропозицією — телефоном або повідомленням.',
      fmName: 'Ім’я',
      fmPhone: 'Телефон',
      fmDate: 'На коли',
      fmBudget: 'Бюджет',
      fmMsg: 'Повідомлення',
      fmMsgPh: 'Що святкуєте, які кольори любить, куди доставити…',
      fmOpt1: 'до 1 000 Kč',
      fmOpt2: '1 000 – 2 000 Kč',
      fmOpt3: 'від 2 000 Kč',
      fmOpt4: 'весілля — індивідуально',
      fmOpt5: 'квіткова підписка',
      fmOpt6: 'ще не знаю',
      fmSend: 'Надіслати запит',
      fmOk: 'Дякуємо! Запит надіслано — відповімо якнайшвидше.',

      chatAria: 'Напишіть нам',
      chatT: 'Напишіть нам',
      chatSub: 'Відповідаємо в години роботи, зазвичай за кілька хвилин.',
      chatLive: 'Живий чат',
      chatCall: 'Подзвонити 723 477 375',
      chatForm: 'Форма запиту',
      chatBtn: 'Напишіть нам',
      fCena: 'Ціна',
      fPrilez: 'Привід',

      ftShop: 'Студія',
      ftContact: 'Контакти',
      ftSocial: 'Соцмережі',
      toTop: 'Нагору',

      lbAria: 'Перегляд фото',
      lbClose: 'Закрити',
      lbPrev: 'Попереднє фото',
      lbNext: 'Наступне фото',
    }
  };

  /* Výchozí texty žijí tady. Admin panel je může přepsat souborem
     assets/data/texty.json — co v něm je, vyhrává nad slovníkem.
     Web tak funguje i bez toho souboru a admin nemůže rozbít syntax. */
  window.COF_TEXTS = DICT;

  var overrides = null;
  var current = null;

  var STORE = 'cof-lang';
  var DEFAULT = 'cs';

  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (DICT[q]) return q;
    try {
      var saved = localStorage.getItem(STORE);
      if (DICT[saved]) return saved;
    } catch (e) { /* private mode */ }
    /* uk, ru i be čtou ukrajinskou verzi líp než českou */
    var nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (nav === 'uk' || nav === 'ru' || nav === 'be') return 'uk';
    return DEFAULT;
  }

  function meta(sel, val) {
    var el = document.querySelector(sel);
    if (el) el.setAttribute('content', val);
  }

  function apply(lang) {
    current = lang;
    var d = DICT[lang] || DICT[DEFAULT];
    var o = (overrides && overrides[lang]) || {};
    var t = function (k) {
      if (o[k] != null && o[k] !== '') return o[k];
      return d[k] != null ? d[k] : k;
    };

    document.documentElement.lang = lang === 'uk' ? 'uk' : 'cs';
    /* katalog.html má vlastní titulek — pozná se podle <body data-page> */
    var page = document.body.getAttribute('data-page');
    var TITLES = { katalog: ['katDocTitle', 'katDocDesc'], zaloha: ['zaDocTitle', 'zaDocDesc'] };
    var pair = TITLES[page] || ['docTitle', 'docDesc'];
    var titleKey = pair[0];
    var descKey = pair[1];
    document.title = t(titleKey);
    meta('meta[name="description"]', t(descKey));
    meta('meta[property="og:title"]', t(titleKey));
    meta('meta[property="og:description"]', t(descKey));
    meta('meta[property="og:locale"]', t('ogLocale'));

    /* každá jazyková verze musí být self-canonical, jinak Google
       ukrajinskou variantu složí do české a hreflang nefunguje */
    var canon = document.querySelector('link[rel="canonical"]');
    if (canon) {
      var cu = new URL(canon.href);
      if (lang === 'uk') cu.searchParams.set('lang', 'uk');
      else cu.searchParams.delete('lang');
      canon.href = cu.href;
      meta('meta[property="og:url"]', cu.href);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.alt = t(el.getAttribute('data-i18n-alt'));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });

    /* fotky v galerii: popisek je alt, tlačítko říká i co udělá */
    document.querySelectorAll('.shot').forEach(function (b) {
      var img = b.querySelector('img');
      if (img) b.setAttribute('aria-label', t('zoom') + ': ' + img.alt);
    });

    document.querySelectorAll('.lang__b').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });

    try { localStorage.setItem(STORE, lang); } catch (e) { /* nevadí */ }

    var url = new URL(location.href);
    if (lang === DEFAULT) url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.lang__b');
    if (b) apply(b.getAttribute('data-lang'));
  });

  /* admin stránka slovník jen čte, nic nepřepisuje */
  if (document.body && document.body.getAttribute('data-page') === 'admin') return;

  apply(pick());

  /* texty upravené v admin panelu (pokud existují) */
  fetch('assets/data/texty.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (o) { if (o) { overrides = o; apply(current); } })
    .catch(function () { /* soubor zatím není — v pořádku */ });
})();
