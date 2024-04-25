import { NextApiRequest, NextApiResponse } from "next";

const   products= [
    {
        "id": 8464627592,
        "url": "https://allegro.pl/oferta/ladowarka-usb-5v-3-1a-gniazdo-hermetyczne-12v-24v-8464627592",
        "title": "ŁADOWARKA USB 5V 3,1A GNIAZDO HERMETYCZNE 12V 24V",
        "price": 25,
        "price_with_delivery": 34.99,
        "quantity": 486,
        "buyers": 40,
        "mainThumbnail": "https://a.allegroimg.com/s360/030c95/1124ca6848e993bea8ebd71a5740/LADOWARKA-USB-5V-3-1A-GNIAZDO-HERMETYCZNE-12V-24V",
        "mainImage": "https://a.allegroimg.com/original/030c95/1124ca6848e993bea8ebd71a5740/LADOWARKA-USB-5V-3-1A-GNIAZDO-HERMETYCZNE-12V-24V"
    },
    {
        "id": 11694440723,
        "url": "https://allegro.pl/oferta/zestaw-uniwersalny-zamek-centralny-slave-master-4-drzwi-osprzet-sterownik-11694440723",
        "title": "ZESTAW UNIWERSALNY ZAMEK CENTRALNY SLAVE MASTER 4 DRZWI OSPRZĘT STEROWNIK",
        "price": 45,
        "price_with_delivery": 54.99,
        "quantity": 423,
        "buyers": 53,
        "mainThumbnail": "https://a.allegroimg.com/s360/11ef4e/6c452aed471783957488ae0fc18c/ZESTAW-UNIWERSALNY-ZAMEK-CENTRALNY-SLAVE-MASTER-4-DRZWI-OSPRZET-STEROWNIK",
        "mainImage": "https://a.allegroimg.com/original/11ef4e/6c452aed471783957488ae0fc18c/ZESTAW-UNIWERSALNY-ZAMEK-CENTRALNY-SLAVE-MASTER-4-DRZWI-OSPRZET-STEROWNIK"
    },
    {
        "id": 12641242457,
        "url": "https://allegro.pl/oferta/adapter-krotka-koncowka-tankowania-wlew-gazu-12641242457",
        "title": "ADAPTER KRÓTKA KOŃCÓWKA TANKOWANIA WLEW GAZU",
        "price": 27.35,
        "price_with_delivery": 37.34,
        "quantity": 8838,
        "buyers": 94,
        "mainThumbnail": "https://a.allegroimg.com/s360/118193/872d954e45af9b2212038f292aef/ADAPTER-KROTKA-KONCOWKA-TANKOWANIA-WLEW-GAZU",
        "mainImage": "https://a.allegroimg.com/original/118193/872d954e45af9b2212038f292aef/ADAPTER-KROTKA-KONCOWKA-TANKOWANIA-WLEW-GAZU"
    },
    {
        "id": 13979100143,
        "url": "https://allegro.pl/oferta/zaglowek-komfort-do-samochodu-oparcie-glowy-poduszka-podrozna-regulowana-13979100143",
        "title": "ZAGŁÓWEK KOMFORT DO SAMOCHODU OPARCIE GŁOWY PODUSZKA PODRÓŻNA REGULOWANA",
        "price": 108.05,
        "price_with_delivery": 118.04,
        "quantity": 617,
        "buyers": 23,
        "mainThumbnail": "https://a.allegroimg.com/s360/114c3b/c7f7a6794a0a9257ae1f5706236b/ZAGLOWEK-KOMFORT-DO-SAMOCHODU-OPARCIE-GLOWY-PODUSZKA-PODROZNA-REGULOWANA",
        "mainImage": "https://a.allegroimg.com/original/114c3b/c7f7a6794a0a9257ae1f5706236b/ZAGLOWEK-KOMFORT-DO-SAMOCHODU-OPARCIE-GLOWY-PODUSZKA-PODROZNA-REGULOWANA"
    },
    {
        "id": 15191644489,
        "url": "https://allegro.pl/oferta/lampa-robocza-126w-led-halogen-szperacz-kierunkowskaz-15191644489",
        "title": "Lampa robocza 126W LED HALOGEN SZPERACZ KIERUNKOWSKAZ",
        "price": 23.9,
        "price_with_delivery": 32.89,
        "quantity": 99774,
        "buyers": 62,
        "mainThumbnail": "https://a.allegroimg.com/s360/111136/d8f7619f470aaf6f34edb46d4b94/Lampa-robocza-126W-LED-HALOGEN-SZPERACZ-KIERUNKOWSKAZ",
        "mainImage": "https://a.allegroimg.com/original/111136/d8f7619f470aaf6f34edb46d4b94/Lampa-robocza-126W-LED-HALOGEN-SZPERACZ-KIERUNKOWSKAZ"
    },
    {
        "id": 10593272378,
        "url": "https://allegro.pl/oferta/uniwersalny-wezyk-rurka-przewod-do-plynu-spryskiwaczy-2m-zlaczki-komplet-10593272378",
        "title": "UNIWERSALNY WĘŻYK RURKA PRZEWÓD DO PŁYNU SPRYSKIWACZY 2m + ZŁĄCZKI KOMPLET",
        "price": 15.27,
        "price_with_delivery": 15.27,
        "quantity": 8891,
        "buyers": 127,
        "mainThumbnail": "https://a.allegroimg.com/s360/117750/098d1ab74758b6f6dd23f78f129c/UNIWERSALNY-WEZYK-RURKA-PRZEWOD-DO-PLYNU-SPRYSKIWACZY-2m-ZLACZKI-KOMPLET",
        "mainImage": "https://a.allegroimg.com/original/117750/098d1ab74758b6f6dd23f78f129c/UNIWERSALNY-WEZYK-RURKA-PRZEWOD-DO-PLYNU-SPRYSKIWACZY-2m-ZLACZKI-KOMPLET"
    },
    {
        "id": 8951117652,
        "url": "https://allegro.pl/oferta/vw-golf-iii-iv-v-vi-vii-passat-b5-b6-seat-ibiza-pompka-spryskiwacza-szyb-8951117652",
        "title": "VW GOLF III IV V VI VII PASSAT B5 B6 SEAT IBIZA POMPKA SPRYSKIWACZA SZYB",
        "price": 16.23,
        "price_with_delivery": 26.22,
        "quantity": 438,
        "buyers": 89,
        "mainThumbnail": "https://a.allegroimg.com/s360/117cf7/5ae895c2465084f5a170559a110f/VW-GOLF-III-IV-V-VI-VII-PASSAT-B5-B6-SEAT-IBIZA-POMPKA-SPRYSKIWACZA-SZYB",
        "mainImage": "https://a.allegroimg.com/original/117cf7/5ae895c2465084f5a170559a110f/VW-GOLF-III-IV-V-VI-VII-PASSAT-B5-B6-SEAT-IBIZA-POMPKA-SPRYSKIWACZA-SZYB"
    },
    {
        "id": 11833189140,
        "url": "https://allegro.pl/oferta/wylacznik-akumulatora-rozlacznik-275a-350a-1250a-11833189140",
        "title": "WYŁĄCZNIK AKUMULATORA ROZŁĄCZNIK 275A 350A 1250A",
        "price": 85,
        "price_with_delivery": 85,
        "quantity": 79,
        "buyers": 23,
        "mainThumbnail": "https://a.allegroimg.com/s360/11c816/75ae4c9745c6b32a20ac4cb0ea78/WYLACZNIK-AKUMULATORA-ROZLACZNIK-275A-350A-1250A",
        "mainImage": "https://a.allegroimg.com/original/11c816/75ae4c9745c6b32a20ac4cb0ea78/WYLACZNIK-AKUMULATORA-ROZLACZNIK-275A-350A-1250A"
    },
    {
        "id": 10555688736,
        "url": "https://allegro.pl/oferta/2x-migacz-boczny-vw-bora-golf-4-passat-polo-lupo-10555688736",
        "title": "2x MIGACZ BOCZNY VW BORA GOLF 4 PASSAT POLO LUPO",
        "price": 22.95,
        "price_with_delivery": 32.94,
        "quantity": 690,
        "buyers": 81,
        "mainThumbnail": "https://a.allegroimg.com/s360/115694/34fd101343719ebfe154b642a8d0/2x-MIGACZ-BOCZNY-VW-BORA-GOLF-4-PASSAT-POLO-LUPO",
        "mainImage": "https://a.allegroimg.com/original/115694/34fd101343719ebfe154b642a8d0/2x-MIGACZ-BOCZNY-VW-BORA-GOLF-4-PASSAT-POLO-LUPO"
    },
    {
        "id": 5546539860,
        "url": "https://allegro.pl/oferta/mocne-swiatla-do-jazdy-dziennej-led-automat-e4-5546539860",
        "title": "MOCNE ŚWIATŁA DO JAZDY DZIENNEJ LED AUTOMAT E4",
        "price": 122.9,
        "price_with_delivery": 130.89,
        "quantity": 956,
        "buyers": 9,
        "mainThumbnail": "https://d.allegroimg.com/s360/01e5de/a6f10ef44c2e9a9aee46be06ff0d/MOCNE-SWIATLA-DO-JAZDY-DZIENNEJ-LED-AUTOMAT-E4",
        "mainImage": "https://d.allegroimg.com/original/01e5de/a6f10ef44c2e9a9aee46be06ff0d/MOCNE-SWIATLA-DO-JAZDY-DZIENNEJ-LED-AUTOMAT-E4"
    },
    {
        "id": 8519748251,
        "url": "https://allegro.pl/oferta/galka-zmiany-biegow-lewarek-5-r-wkrecana-do-toyota-avensis-corolla-yaris-8519748251",
        "title": "GAŁKA ZMIANY BIEGÓW LEWAREK 5 + R WKRĘCANA DO TOYOTA AVENSIS COROLLA YARIS",
        "price": 28.8,
        "price_with_delivery": 38.79,
        "quantity": 95817,
        "buyers": 57,
        "mainThumbnail": "https://a.allegroimg.com/s360/119ea8/295129cb429187337be43e631e33/GALKA-ZMIANY-BIEGOW-LEWAREK-5-R-WKRECANA-DO-TOYOTA-AVENSIS-COROLLA-YARIS",
        "mainImage": "https://a.allegroimg.com/original/119ea8/295129cb429187337be43e631e33/GALKA-ZMIANY-BIEGOW-LEWAREK-5-R-WKRECANA-DO-TOYOTA-AVENSIS-COROLLA-YARIS"
    },
    {
        "id": 14692159219,
        "url": "https://allegro.pl/oferta/uchwyt-schowek-organizer-samochodowy-do-auta-2xusb-2x-zapalniczka-kubek-lcd-14692159219",
        "title": "UCHWYT SCHOWEK ORGANIZER SAMOCHODOWY DO AUTA 2xUSB 2x ZAPALNICZKA KUBEK LCD",
        "price": 69.88,
        "price_with_delivery": 69.88,
        "quantity": 919,
        "buyers": 19,
        "mainThumbnail": "https://a.allegroimg.com/s360/117f8f/77c4c1944c6ab894d9ce3755e28a/UCHWYT-SCHOWEK-ORGANIZER-SAMOCHODOWY-DO-AUTA-2xUSB-2x-ZAPALNICZKA-KUBEK-LCD",
        "mainImage": "https://a.allegroimg.com/original/117f8f/77c4c1944c6ab894d9ce3755e28a/UCHWYT-SCHOWEK-ORGANIZER-SAMOCHODOWY-DO-AUTA-2xUSB-2x-ZAPALNICZKA-KUBEK-LCD"
    },
    {
        "id": 15263808075,
        "url": "https://allegro.pl/oferta/akumulator-12v-45ah-400a-l-207x175x190-black-dynamic-15263808075",
        "title": "AKUMULATOR 12V 45AH/400A L- 207X175X190 BLACK DYNAMIC",
        "price": 272.99,
        "price_with_delivery": 286.98,
        "quantity": 23,
        "buyers": 4,
        "mainThumbnail": "https://a.allegroimg.com/s360/1190a1/64addb834fd18517b5756135d9eb/AKUMULATOR-12V-45AH-400A-L-207X175X190-BLACK-DYNAMIC",
        "mainImage": "https://a.allegroimg.com/original/1190a1/64addb834fd18517b5756135d9eb/AKUMULATOR-12V-45AH-400A-L-207X175X190-BLACK-DYNAMIC"
    },
    {
        "id": 11154124368,
        "url": "https://allegro.pl/oferta/reflektor-dalekosiezny-skyled-jumbo-full-led-11154124368",
        "title": "REFLEKTOR DALEKOSIĘŻNY SKYLED JUMBO FULL LED",
        "price": 685,
        "price_with_delivery": 693.99,
        "quantity": 539,
        "buyers": 5,
        "mainThumbnail": "https://a.allegroimg.com/s360/1170c7/d751ac26451cb1c39c50cf198db5/REFLEKTOR-DALEKOSIEZNY-SKYLED-JUMBO-FULL-LED",
        "mainImage": "https://a.allegroimg.com/original/1170c7/d751ac26451cb1c39c50cf198db5/REFLEKTOR-DALEKOSIEZNY-SKYLED-JUMBO-FULL-LED"
    },
    {
        "id": 7330023311,
        "url": "https://allegro.pl/oferta/uchwyt-klamka-zamka-schowka-do-audi-a4-b6-b7-exeo-2001-08-7330023311",
        "title": "UCHWYT KLAMKA ZAMKA SCHOWKA DO AUDI A4 B6 B7 EXEO 2001-08",
        "price": 38.41,
        "price_with_delivery": 38.41,
        "quantity": 1431,
        "buyers": 59,
        "mainThumbnail": "https://a.allegroimg.com/s360/111a93/2010686e4231adc52d2447118a47/UCHWYT-KLAMKA-ZAMKA-SCHOWKA-DO-AUDI-A4-B6-B7-EXEO-2001-08",
        "mainImage": "https://a.allegroimg.com/original/111a93/2010686e4231adc52d2447118a47/UCHWYT-KLAMKA-ZAMKA-SCHOWKA-DO-AUDI-A4-B6-B7-EXEO-2001-08"
    },
    {
        "id": 12950713359,
        "url": "https://allegro.pl/oferta/chip-tuning-obd2-audi-a1-a2-a3-a4-a5-a6-a7-a8-s3-12950713359",
        "title": "Chip Tuning OBD2 Audi A1 A2 A3 A4 A5 A6 A7 A8 S3",
        "price": 549.97,
        "price_with_delivery": 558.96,
        "quantity": 77,
        "buyers": 2,
        "mainThumbnail": "https://a.allegroimg.com/s360/117af3/f8c57c6b4093b447cc7b404a622c/Chip-Tuning-OBD2-Audi-A1-A2-A3-A4-A5-A6-A7-A8-S3",
        "mainImage": "https://a.allegroimg.com/original/117af3/f8c57c6b4093b447cc7b404a622c/Chip-Tuning-OBD2-Audi-A1-A2-A3-A4-A5-A6-A7-A8-S3"
    },
    {
        "id": 6848317353,
        "url": "https://allegro.pl/oferta/lampa-robocza-16-led-halogen-48w-12v-24v-hom-e50-obudowa-aluminiowa-6848317353",
        "title": "LAMPA ROBOCZA 16 LED HALOGEN 48W 12V 24V HOM. E50 OBUDOWA ALUMINIOWA",
        "price": 22.95,
        "price_with_delivery": 29.94,
        "quantity": 400,
        "buyers": 81,
        "mainThumbnail": "https://a.allegroimg.com/s360/116cdc/605e2e3246809e06b5e4bc9a6a23/LAMPA-ROBOCZA-16-LED-HALOGEN-48W-12V-24V-HOM-E50-OBUDOWA-ALUMINIOWA",
        "mainImage": "https://a.allegroimg.com/original/116cdc/605e2e3246809e06b5e4bc9a6a23/LAMPA-ROBOCZA-16-LED-HALOGEN-48W-12V-24V-HOM-E50-OBUDOWA-ALUMINIOWA"
    },
    {
        "id": 6683779236,
        "url": "https://allegro.pl/oferta/lampa-robocza-halogen-16-led-48w-12v-24v-szperacz-6683779236",
        "title": "LAMPA ROBOCZA HALOGEN 16 LED 48W 12V/24V SZPERACZ",
        "price": 42.16,
        "price_with_delivery": 49.15,
        "quantity": 108,
        "buyers": 61,
        "mainThumbnail": "https://6.allegroimg.com/s360/035639/e1bfc929497cbe6c8a1875e096e6/LAMPA-ROBOCZA-HALOGEN-16-LED-48W-12V-24V-SZPERACZ",
        "mainImage": "https://6.allegroimg.com/original/035639/e1bfc929497cbe6c8a1875e096e6/LAMPA-ROBOCZA-HALOGEN-16-LED-48W-12V-24V-SZPERACZ"
    },
    {
        "id": 14913956377,
        "url": "https://allegro.pl/oferta/uniwersalny-splitter-dokladka-przedniego-zderzaka-spoiler-czarny-polysk-14913956377",
        "title": "UNIWERSALNY SPLITTER DOKŁADKA PRZEDNIEGO ZDERZAKA SPOILER CZARNY POŁYSK",
        "price": 129,
        "price_with_delivery": 140.9,
        "quantity": 82,
        "buyers": 13,
        "mainThumbnail": "https://a.allegroimg.com/s360/1145ab/96a4abe4442a801905dbb5f70e4e/UNIWERSALNY-SPLITTER-DOKLADKA-PRZEDNIEGO-ZDERZAKA-SPOILER-CZARNY-POLYSK",
        "mainImage": "https://a.allegroimg.com/original/1145ab/96a4abe4442a801905dbb5f70e4e/UNIWERSALNY-SPLITTER-DOKLADKA-PRZEDNIEGO-ZDERZAKA-SPOILER-CZARNY-POLYSK"
    },
    {
        "id": 7630621279,
        "url": "https://allegro.pl/oferta/nagrzewnica-audi-a4-b5-80-90-coupe-893819030a-7630621279",
        "title": "Nagrzewnica AUDI A4 B5 80 90 COUPE 893819030A",
        "price": 39.98,
        "price_with_delivery": 48.09,
        "quantity": 20,
        "buyers": 6,
        "mainThumbnail": "https://a.allegroimg.com/s360/119fd3/b5ed862d4f7abebfeb04e45f1239/Nagrzewnica-AUDI-A4-B5-80-90-COUPE-893819030A",
        "mainImage": "https://a.allegroimg.com/original/119fd3/b5ed862d4f7abebfeb04e45f1239/Nagrzewnica-AUDI-A4-B5-80-90-COUPE-893819030A"
    },
    {
        "id": 15154837391,
        "url": "https://allegro.pl/oferta/trw-gdb1040-klocki-hamulc-opel-astra-f-corsa-b-15154837391",
        "title": "TRW GDB1040 KLOCKI HAMULC. OPEL ASTRA F, CORSA B",
        "price": 60,
        "price_with_delivery": 68.99,
        "quantity": 11,
        "buyers": 2,
        "mainThumbnail": "https://a.allegroimg.com/s360/167bde/deccfad84bcd870c9b31069c3f6d/TRW-GDB1040-KLOCKI-HAMULC-OPEL-ASTRA-F-CORSA-B",
        "mainImage": "https://a.allegroimg.com/original/167bde/deccfad84bcd870c9b31069c3f6d/TRW-GDB1040-KLOCKI-HAMULC-OPEL-ASTRA-F-CORSA-B"
    },
    {
        "id": 15115983864,
        "url": "https://allegro.pl/oferta/klocki-bosch-przod-toyota-auris-ii-corolla-e18-15115983864",
        "title": "Klocki BOSCH Przód - TOYOTA AURIS II COROLLA E18",
        "price": 103,
        "price_with_delivery": 111.99,
        "quantity": 14,
        "buyers": 10,
        "mainThumbnail": "https://a.allegroimg.com/s360/16ec2f/440776ce4283bb191e4d7f125f6f/Klocki-BOSCH-Przod-TOYOTA-AURIS-II-COROLLA-E18",
        "mainImage": "https://a.allegroimg.com/original/16ec2f/440776ce4283bb191e4d7f125f6f/Klocki-BOSCH-Przod-TOYOTA-AURIS-II-COROLLA-E18"
    },
    {
        "id": 13917734792,
        "url": "https://allegro.pl/oferta/lusterko-do-obserwacji-dziecka-w-podrozy-aucie-360-13917734792",
        "title": "Lusterko do obserwacji dziecka w podróży aucie 360",
        "price": 34.9,
        "price_with_delivery": 43.89,
        "quantity": 15,
        "buyers": 9,
        "mainThumbnail": "https://a.allegroimg.com/s360/11cef3/6cc5643c4bdb9e2f915c313eb66d/Lusterko-do-obserwacji-dziecka-w-podrozy-aucie-360",
        "mainImage": "https://a.allegroimg.com/original/11cef3/6cc5643c4bdb9e2f915c313eb66d/Lusterko-do-obserwacji-dziecka-w-podrozy-aucie-360"
    },
    {
        "id": 14742929066,
        "url": "https://allegro.pl/oferta/olej-castrol-75w-1l-transmax-manual-fe-14742929066",
        "title": "OLEJ CASTROL 75W 1L TRANSMAX MANUAL FE",
        "price": 71.31,
        "price_with_delivery": 80.3,
        "quantity": 20,
        "buyers": 3,
        "mainThumbnail": "https://a.allegroimg.com/s360/119ff6/1f68abbb4e139cad47e72fd65ced/OLEJ-CASTROL-75W-1L-TRANSMAX-MANUAL-FE",
        "mainImage": "https://a.allegroimg.com/original/119ff6/1f68abbb4e139cad47e72fd65ced/OLEJ-CASTROL-75W-1L-TRANSMAX-MANUAL-FE"
    },
    {
        "id": 14752127071,
        "url": "https://allegro.pl/oferta/wahacz-tyl-gorny-opel-vectra-c-signum-saab-9-3-14752127071",
        "title": "WAHACZ TYŁ GÓRNY OPEL VECTRA C SIGNUM SAAB 9-3",
        "price": 68.74,
        "price_with_delivery": 78.73,
        "quantity": 3,
        "buyers": 7,
        "mainThumbnail": "https://a.allegroimg.com/s360/116530/26cea7884880bdc9a1799683d090/WAHACZ-TYL-GORNY-OPEL-VECTRA-C-SIGNUM-SAAB-9-3",
        "mainImage": "https://a.allegroimg.com/original/116530/26cea7884880bdc9a1799683d090/WAHACZ-TYL-GORNY-OPEL-VECTRA-C-SIGNUM-SAAB-9-3"
    },
    {
        "id": 15263798944,
        "url": "https://allegro.pl/oferta/akumulator-12v-70ah-640a-l-278x175x175-s3-15263798944",
        "title": "AKUMULATOR 12V 70AH/640A L- 278X175X175 S3",
        "price": 425.78,
        "price_with_delivery": 439.77,
        "quantity": 26,
        "buyers": 1,
        "mainThumbnail": "https://a.allegroimg.com/s360/165b1b/6c13ae5349e9ada74d6640c7bcc9/AKUMULATOR-12V-70AH-640A-L-278X175X175-S3",
        "mainImage": "https://a.allegroimg.com/original/165b1b/6c13ae5349e9ada74d6640c7bcc9/AKUMULATOR-12V-70AH-640A-L-278X175X175-S3"
    },
    {
        "id": 9715228052,
        "url": "https://allegro.pl/oferta/rura-waz-turbo-intercoolera-opel-movano-b-2-3-cdti-144602862r-95519365-9715228052",
        "title": "RURA WĄŻ TURBO INTERCOOLERA OPEL MOVANO B 2.3 CDTI 144602862R 95519365",
        "price": 419,
        "price_with_delivery": 419,
        "quantity": 155,
        "buyers": 6,
        "mainThumbnail": "https://a.allegroimg.com/s360/11a6cc/8379bc5e49d08ad1c877f16de3d4/RURA-WAZ-TURBO-INTERCOOLERA-OPEL-MOVANO-B-2-3-CDTI-144602862R-95519365",
        "mainImage": "https://a.allegroimg.com/original/11a6cc/8379bc5e49d08ad1c877f16de3d4/RURA-WAZ-TURBO-INTERCOOLERA-OPEL-MOVANO-B-2-3-CDTI-144602862R-95519365"
    },
    {
        "id": 14266509629,
        "url": "https://allegro.pl/oferta/rura-waz-turbo-intercoolera-opel-insignia-2-0-cdti-860118-13242121-22990025-14266509629",
        "title": "RURA WĄŻ TURBO INTERCOOLERA OPEL INSIGNIA 2.0 CDTI 860118 13242121 22990025",
        "price": 180,
        "price_with_delivery": 180,
        "quantity": 80,
        "buyers": 8,
        "mainThumbnail": "https://a.allegroimg.com/s360/11c030/01feb3334e63a34f1f7234b19c4e/RURA-WAZ-TURBO-INTERCOOLERA-OPEL-INSIGNIA-2-0-CDTI-860118-13242121-22990025",
        "mainImage": "https://a.allegroimg.com/original/11c030/01feb3334e63a34f1f7234b19c4e/RURA-WAZ-TURBO-INTERCOOLERA-OPEL-INSIGNIA-2-0-CDTI-860118-13242121-22990025"
    },
    {
        "id": 13349573113,
        "url": "https://allegro.pl/oferta/adapter-emulator-sondy-lambda-z-katalizatorem-stal-13349573113",
        "title": "ADAPTER EMULATOR SONDY LAMBDA Z KATALIZATOREM STAL",
        "price": 91.1,
        "price_with_delivery": 101.09,
        "quantity": 5507,
        "buyers": 6,
        "mainThumbnail": "https://a.allegroimg.com/s360/113565/9a76696a465a94daaec0f750c60b/ADAPTER-EMULATOR-SONDY-LAMBDA-Z-KATALIZATOREM-STAL",
        "mainImage": "https://a.allegroimg.com/original/113565/9a76696a465a94daaec0f750c60b/ADAPTER-EMULATOR-SONDY-LAMBDA-Z-KATALIZATOREM-STAL"
    },
    {
        "id": 15263866343,
        "url": "https://allegro.pl/oferta/akumulator-12v-70ah-630a-l-271x175x220-blue-dynamic-slupki-nad-obudowa-15263866343",
        "title": "AKUMULATOR 12V 70AH/630A L- 271X175X220 BLUE DYNAMIC (SŁUPKI NAD OBUDOWĄ,",
        "price": 449.85,
        "price_with_delivery": 463.84,
        "quantity": 25,
        "buyers": 1,
        "mainThumbnail": "https://a.allegroimg.com/s360/115abf/b6910e114fcb999f6d741315798c/AKUMULATOR-12V-70AH-630A-L-271X175X220-BLUE-DYNAMIC-SLUPKI-NAD-OBUDOWA",
        "mainImage": "https://a.allegroimg.com/original/115abf/b6910e114fcb999f6d741315798c/AKUMULATOR-12V-70AH-630A-L-271X175X220-BLUE-DYNAMIC-SLUPKI-NAD-OBUDOWA"
    },
    {
        "id": 10768274653,
        "url": "https://allegro.pl/oferta/dysze-spryskiwacza-uniwersalne-na-ramie-wycieraczki-10768274653",
        "title": "DYSZE SPRYSKIWACZA UNIWERSALNE NA RAMIĘ WYCIERACZKI",
        "price": 28.81,
        "price_with_delivery": 38.8,
        "quantity": 9535,
        "buyers": 18,
        "mainThumbnail": "https://a.allegroimg.com/s360/11d9dc/e58ea1154a48beed738e45ff7e1d/DYSZE-SPRYSKIWACZA-UNIWERSALNE-NA-RAMIE-WYCIERACZKI",
        "mainImage": "https://a.allegroimg.com/original/11d9dc/e58ea1154a48beed738e45ff7e1d/DYSZE-SPRYSKIWACZA-UNIWERSALNE-NA-RAMIE-WYCIERACZKI"
    },
    {
        "id": 14605486732,
        "url": "https://allegro.pl/oferta/kable-wysokiego-napiecia-1192001110-jpg-14605486732",
        "title": "KABLE WYSOKIEGO NAPIĘCIA 1192001110 JPG",
        "price": 103.69,
        "price_with_delivery": 112.68,
        "quantity": 6,
        "buyers": 5,
        "mainThumbnail": "https://a.allegroimg.com/s360/11ce72/696c1b054bb78fd82ee33dc708f3/KABLE-WYSOKIEGO-NAPIECIA-1192001110-JPG",
        "mainImage": "https://a.allegroimg.com/original/11ce72/696c1b054bb78fd82ee33dc708f3/KABLE-WYSOKIEGO-NAPIECIA-1192001110-JPG"
    },
    {
        "id": 12138846135,
        "url": "https://allegro.pl/oferta/wyswietlacz-licznika-lcd-bmw-e38-e39-e53-x5-12138846135",
        "title": "WYŚWIETLACZ LICZNIKA LCD BMW E38 E39 E53 X5",
        "price": 151.05,
        "price_with_delivery": 161.04,
        "quantity": 286,
        "buyers": 8,
        "mainThumbnail": "https://a.allegroimg.com/s360/117bc4/ccc16d2c4200ab17de4bd5127167/WYSWIETLACZ-LICZNIKA-LCD-BMW-E38-E39-E53-X5",
        "mainImage": "https://a.allegroimg.com/original/117bc4/ccc16d2c4200ab17de4bd5127167/WYSWIETLACZ-LICZNIKA-LCD-BMW-E38-E39-E53-X5"
    },
    {
        "id": 7662019075,
        "url": "https://allegro.pl/oferta/rura-waz-turbo-intercoolera-nissan-juke-nv-200-cube-1-5-dci-144601fe0c-7662019075",
        "title": "RURA WĄŻ TURBO INTERCOOLERA NISSAN JUKE NV 200 CUBE 1.5 dCi 144601FE0C",
        "price": 149,
        "price_with_delivery": 149,
        "quantity": 31,
        "buyers": 6,
        "mainThumbnail": "https://f.allegroimg.com/s360/03c485/db80a8a841a3af0e06c5a0e0e04f/RURA-WAZ-TURBO-INTERCOOLERA-NISSAN-JUKE-NV-200-CUBE-1-5-dCi-144601FE0C",
        "mainImage": "https://f.allegroimg.com/original/03c485/db80a8a841a3af0e06c5a0e0e04f/RURA-WAZ-TURBO-INTERCOOLERA-NISSAN-JUKE-NV-200-CUBE-1-5-dCi-144601FE0C"
    },
    {
        "id": 15263773678,
        "url": "https://allegro.pl/oferta/akumulator-12v-45ah-300a-l-220x135x225-black-dynamic-slupki-nad-obudowa-15263773678",
        "title": "AKUMULATOR 12V 45AH/300A L- 220X135X225 BLACK DYNAMIC (SŁUPKI NAD OBUDOWĄ,",
        "price": 299.75,
        "price_with_delivery": 313.74,
        "quantity": 29,
        "buyers": 1,
        "mainThumbnail": "https://a.allegroimg.com/s360/1146df/5691a16d4ccd8d55525dcf2e3e04/AKUMULATOR-12V-45AH-300A-L-220X135X225-BLACK-DYNAMIC-SLUPKI-NAD-OBUDOWA",
        "mainImage": "https://a.allegroimg.com/original/1146df/5691a16d4ccd8d55525dcf2e3e04/AKUMULATOR-12V-45AH-300A-L-220X135X225-BLACK-DYNAMIC-SLUPKI-NAD-OBUDOWA"
    },
    {
        "id": 15263803425,
        "url": "https://allegro.pl/oferta/akumulator-12v-45ah-330a-l-238x129x227-blue-dynamic-slupki-nad-obudowa-15263803425",
        "title": "AKUMULATOR 12V 45AH/330A L- 238X129X227 BLUE DYNAMIC (SŁUPKI NAD OBUDOWĄ,",
        "price": 317.25,
        "price_with_delivery": 331.24,
        "quantity": 99,
        "buyers": 1,
        "mainThumbnail": "https://a.allegroimg.com/s360/16ef5a/7ef633164b4ca36fd8d90eef9951/AKUMULATOR-12V-45AH-330A-L-238X129X227-BLUE-DYNAMIC-SLUPKI-NAD-OBUDOWA",
        "mainImage": "https://a.allegroimg.com/original/16ef5a/7ef633164b4ca36fd8d90eef9951/AKUMULATOR-12V-45AH-330A-L-238X129X227-BLUE-DYNAMIC-SLUPKI-NAD-OBUDOWA"
    },
    {
        "id": 15264011243,
        "url": "https://allegro.pl/oferta/akumulator-12v-88ah-680a-l-353x175x190-t3-15264011243",
        "title": "AKUMULATOR 12V 88AH/680A L- 353X175X190 T3",
        "price": 490.41,
        "price_with_delivery": 504.4,
        "quantity": 28,
        "buyers": 1,
        "mainThumbnail": "https://a.allegroimg.com/s360/161f53/4916f7fb4131a461c188aa3a6547/AKUMULATOR-12V-88AH-680A-L-353X175X190-T3",
        "mainImage": "https://a.allegroimg.com/original/161f53/4916f7fb4131a461c188aa3a6547/AKUMULATOR-12V-88AH-680A-L-353X175X190-T3"
    },
    {
        "id": 11691491854,
        "url": "https://allegro.pl/oferta/aparat-zaplonu-1191100100-jpg-11691491854",
        "title": "APARAT ZAPŁONU 1191100100 JPG",
        "price": 166.89,
        "price_with_delivery": 175.88,
        "quantity": 1000,
        "buyers": 4,
        "mainThumbnail": "https://a.allegroimg.com/s360/117713/fefba21241ab99df7e68873309ce/APARAT-ZAPLONU-1191100100-JPG",
        "mainImage": "https://a.allegroimg.com/original/117713/fefba21241ab99df7e68873309ce/APARAT-ZAPLONU-1191100100-JPG"
    },
    {
        "id": 13144119602,
        "url": "https://allegro.pl/oferta/skoda-rapid-lampa-tylna-prawa-oryginalna-13144119602",
        "title": "Skoda Rapid Lampa tylna prawa oryginalna",
        "price": 219.99,
        "price_with_delivery": 229.98,
        "quantity": 100,
        "buyers": 1,
        "mainThumbnail": "https://a.allegroimg.com/s360/1192b6/9630aa504525a96781546bf0f127/Skoda-Rapid-Lampa-tylna-prawa-oryginalna",
        "mainImage": "https://a.allegroimg.com/original/1192b6/9630aa504525a96781546bf0f127/Skoda-Rapid-Lampa-tylna-prawa-oryginalna"
    },
    {
        "id": 9034227929,
        "url": "https://allegro.pl/oferta/filtr-dpf-fap-ford-focus-1-6-tdci-07-2004-07-201-9034227929",
        "title": "FILTR DPF FAP FORD FOCUS 1.6 TDCi 07/2004-07/201",
        "price": 1052.58,
        "price_with_delivery": 1052.58,
        "quantity": 989,
        "buyers": 0,
        "mainThumbnail": "https://a.allegroimg.com/s360/113412/5057111b4c1c85570681fec7373f/FILTR-DPF-FAP-FORD-FOCUS-1-6-TDCi-07-2004-07-201",
        "mainImage": "https://a.allegroimg.com/original/113412/5057111b4c1c85570681fec7373f/FILTR-DPF-FAP-FORD-FOCUS-1-6-TDCi-07-2004-07-201"
    }
]


export async function GET(req: NextApiRequest, res: NextApiResponse) {

  
    const result = products.slice(0,8);
   return Response.json({result})
 
   // try {
   //     axios.get("https://euparts.com.ua/api/carmakes/?format=json").then(res=> {
   //       console.log(res)
   //     return Response.json({});
 
   //   }).catch(err=>{
   //     throw err;
   //   })
 
   // } catch (error) {
   //   return Response.json({ error });
   // }
 
 
 }