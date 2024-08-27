import { AttackCard, AttackId, CreatureCard, CreatureId, Tribe } from "../game/types/common.ts";

const Creatures: Record<CreatureId, CreatureCard> = {
        "b3422180-6a63-4e99-90d5-6f8e5bab0355": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 30,
                "speed": 55,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "b3422180-6a63-4e99-90d5-6f8e5bab0355",
            "cardId": "",
            "name": "Arias",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/4om40pM.png",
            "thumb": "https://i.imgur.com/EsdDn4q.jpeg"
        },
        "27d65745-e759-4ba6-846b-ef19b548d678": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 25,
                "speed": 55,
                "power": 55,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "27d65745-e759-4ba6-846b-ef19b548d678",
            "cardId": "",
            "name": "Ario",
            "chaoticId": "72",
            "cardImage": "https://i.imgur.com/Tt9Qufc.png",
            "thumb": "https://i.imgur.com/6119keo.jpeg"
        },
        "f0d66d42-8dd7-43b0-969b-1479db7d587e": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 30,
                "wisdom": 60,
                "speed": 105,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "f0d66d42-8dd7-43b0-969b-1479db7d587e",
            "cardId": "",
            "name": "Attacat",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/dxgCIpl.png",
            "thumb": "https://i.imgur.com/kaxcue0.jpeg"
        },
        "e9092309-81b7-44b1-9085-dc83bb5de098": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 15,
                "speed": 65,
                "power": 85,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e9092309-81b7-44b1-9085-dc83bb5de098",
            "cardId": "",
            "name": "Barath Beyond",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/5qWLq8W.png",
            "thumb": "https://i.imgur.com/0WFhDLj.jpeg"
        },
        "18394d97-e2a0-4c24-afb3-ef39cb84acd8": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 45,
                "wisdom": 30,
                "speed": 35,
                "power": 40,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "18394d97-e2a0-4c24-afb3-ef39cb84acd8",
            "cardId": "",
            "name": "Biondu",
            "chaoticId": "73",
            "cardImage": "https://i.imgur.com/NaSHhdZ.png",
            "thumb": "https://i.imgur.com/conzPoX.jpeg"
        },
        "ac17c210-bbe4-4f67-ac91-8a032cdcfdcd": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 35,
                "wisdom": 60,
                "speed": 25,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "ac17c210-bbe4-4f67-ac91-8a032cdcfdcd",
            "cardId": "",
            "name": "Blazier",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/uEWG2X3.png",
            "thumb": "https://i.imgur.com/peE0DhR.jpeg"
        },
        "fad891ba-1258-490b-bd77-2177bae763b3": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 35,
                "wisdom": 70,
                "speed": 45,
                "power": 65,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "fad891ba-1258-490b-bd77-2177bae763b3",
            "cardId": "",
            "name": "Blügon",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/s2dj8Q9.png",
            "thumb": "https://i.imgur.com/peE0DhR.jpeg"
        },
        "c0b2d9f1-2890-4c38-b8c7-1dc2f55171c0": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 80,
                "speed": 60,
                "power": 40,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c0b2d9f1-2890-4c38-b8c7-1dc2f55171c0",
            "cardId": "",
            "name": "Bodal",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/pkWKdno.png",
            "thumb": "https://i.imgur.com/Kz319sb.jpeg"
        },
        "0231c1cc-a3c3-413c-ab04-9802bf5cfe00": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 85,
                "speed": 40,
                "power": 85,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "0231c1cc-a3c3-413c-ab04-9802bf5cfe00",
            "cardId": "",
            "name": "Borth-Majar",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/XExunLQ.png",
            "thumb": "https://i.imgur.com/2DUiKIc.jpeg"
        },
        "a124dfbc-6c69-4c96-8af8-9dad0222b67b": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 55,
                "wisdom": 65,
                "speed": 55,
                "power": 45,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a124dfbc-6c69-4c96-8af8-9dad0222b67b",
            "cardId": "",
            "name": "Brathe",
            "chaoticId": "74",
            "cardImage": "https://i.imgur.com/12qBSrf.png",
            "thumb": "https://i.imgur.com/aAQNCnV.jpeg"
        },
        "4f7f7bb7-0407-41fb-84e0-43af4cd20cbc": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 95,
                "wisdom": 70,
                "speed": 60,
                "power": 90,
                "energy": 70,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4f7f7bb7-0407-41fb-84e0-43af4cd20cbc",
            "cardId": "",
            "name": "Chaor",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/ZrcPDxM.png",
            "thumb": ""
        },
        "446581db-d9d7-48ed-abdc-f6ba39558ae1": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 40,
                "speed": 25,
                "power": 45,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "446581db-d9d7-48ed-abdc-f6ba39558ae1",
            "cardId": "",
            "name": "Crawsectus",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/5XeD6Rc.png",
            "thumb": ""
        },
        "213ea688-938e-4708-91cb-9d9267710543": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 20,
                "speed": 65,
                "power": 75,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "213ea688-938e-4708-91cb-9d9267710543",
            "cardId": "",
            "name": "Dardemus",
            "chaoticId": "32",
            "cardImage": "https://i.imgur.com/d3EKEb4.png",
            "thumb": ""
        },
        "ddd4dc24-b2d0-4e0b-9dcc-63d21f3fa62b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 65,
                "speed": 50,
                "power": 65,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ddd4dc24-b2d0-4e0b-9dcc-63d21f3fa62b",
            "cardId": "",
            "name": "Donmar",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/qi11aPL.png",
            "thumb": ""
        },
        "d3346e2b-4b3f-4b14-a5ed-45a3d1688ddc": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 25,
                "wisdom": 50,
                "speed": 75,
                "power": 70,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d3346e2b-4b3f-4b14-a5ed-45a3d1688ddc",
            "cardId": "",
            "name": "Dractyl",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/Y6iqNqk.png",
            "thumb": ""
        },
        "162d8b4f-9449-499c-8151-7ff5fe2c63cf": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 85,
                "speed": 50,
                "power": 45,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "162d8b4f-9449-499c-8151-7ff5fe2c63cf",
            "cardId": "",
            "name": "Drakness",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/IqyQS55.png",
            "thumb": ""
        },
        "6eb8785b-efea-408d-ae5f-c45390c4a049": {
            "tribe": "Danian",
            "stats": {
                "courage": 40,
                "wisdom": 30,
                "speed": 40,
                "power": 60,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "6eb8785b-efea-408d-ae5f-c45390c4a049",
            "cardId": "",
            "name": "Ekuud",
            "chaoticId": "57",
            "cardImage": "https://i.imgur.com/Aynj6wu.png",
            "thumb": "https://i.imgur.com/9G0zMmO.jpeg"
        },
        "256e99a1-e0dd-424a-85f3-d8b13ecfd30b": {
            "tribe": "Danian",
            "stats": {
                "courage": 60,
                "wisdom": 35,
                "speed": 40,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "256e99a1-e0dd-424a-85f3-d8b13ecfd30b",
            "cardId": "",
            "name": "Formicidor",
            "chaoticId": "58",
            "cardImage": "https://i.imgur.com/ZkC666z.png",
            "thumb": "https://i.imgur.com/8bNQ88d.jpeg"
        },
        "280ca7c3-92f2-40f2-b19e-80925ec8a3d3": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 85,
                "wisdom": 45,
                "speed": 75,
                "power": 80,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "280ca7c3-92f2-40f2-b19e-80925ec8a3d3",
            "cardId": "",
            "name": "Frafdo",
            "chaoticId": "9",
            "cardImage": "https://i.imgur.com/NeR0vBg.png",
            "thumb": ""
        },
        "7ba4a384-1f88-4fec-8055-d35d6e2c5aef": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 40,
                "speed": 65,
                "power": 70,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "7ba4a384-1f88-4fec-8055-d35d6e2c5aef",
            "cardId": "",
            "name": "Galin",
            "chaoticId": "59",
            "cardImage": "https://i.imgur.com/MLqURyK.png",
            "thumb": "https://i.imgur.com/dNXinWw.jpeg"
        },
        "46f8f242-00c5-4b83-b619-6c75d3601773": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 35,
                "speed": 100,
                "power": 50,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "46f8f242-00c5-4b83-b619-6c75d3601773",
            "cardId": "",
            "name": "Gespedan",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/F7888XA.png",
            "thumb": ""
        },
        "03e57260-8f62-4fa1-9ad3-4786bd8da193": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 15,
                "speed": 35,
                "power": 85,
                "energy": 35,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "03e57260-8f62-4fa1-9ad3-4786bd8da193",
            "cardId": "",
            "name": "Ghuul",
            "chaoticId": "34",
            "cardImage": "https://i.imgur.com/SVJUSfA.png",
            "thumb": ""
        },
        "3382a302-f541-4b83-95c7-a5ab3943151b": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 30,
                "wisdom": 20,
                "speed": 60,
                "power": 110,
                "energy": 45,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "3382a302-f541-4b83-95c7-a5ab3943151b",
            "cardId": "",
            "name": "Grook",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/Dv9XyiL.png",
            "thumb": ""
        },
        "7e8b4776-f336-4af7-9e8c-8863051c64a4": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 70,
                "wisdom": 55,
                "speed": 45,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "7e8b4776-f336-4af7-9e8c-8863051c64a4",
            "cardId": "",
            "name": "H'earring",
            "chaoticId": "36",
            "cardImage": "https://i.imgur.com/WiI99Nj.png",
            "thumb": ""
        },
        "14eeb061-b112-45e6-8cbb-f90f20ae43bc": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 50,
                "power": 50,
                "energy": 50,
                "fire": true,
                "water": true,
                "earth": true,
                "air": true
            },
            "id": "14eeb061-b112-45e6-8cbb-f90f20ae43bc",
            "cardId": "",
            "name": "Heptadd",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/UrOh7dz.png",
            "thumb": ""
        },
        "6628b631-ee89-47a9-9ef3-b21730c7d0c0": {
            "tribe": "Danian",
            "stats": {
                "courage": 40,
                "wisdom": 35,
                "speed": 30,
                "power": 55,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "6628b631-ee89-47a9-9ef3-b21730c7d0c0",
            "cardId": "",
            "name": "Hota",
            "chaoticId": "60",
            "cardImage": "https://i.imgur.com/SE8y5hA.png",
            "thumb": "https://i.imgur.com/EyiPRqQ.jpeg"
        },
        "10d9b9a1-762c-4d43-817e-6a67092d1eb5": {
            "tribe": "Danian",
            "stats": {
                "courage": 45,
                "wisdom": 65,
                "speed": 30,
                "power": 60,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "10d9b9a1-762c-4d43-817e-6a67092d1eb5",
            "cardId": "",
            "name": "Ibiaan",
            "chaoticId": "61",
            "cardImage": "https://i.imgur.com/itOC6bm.png",
            "thumb": "https://i.imgur.com/xrbsgHp.jpeg"
        },
        "7dedeb76-8b35-42c2-af83-897e2320b939": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 40,
                "speed": 55,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "7dedeb76-8b35-42c2-af83-897e2320b939",
            "cardId": "",
            "name": "Intress",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/Tsxz1hW.png",
            "thumb": ""
        },
        "a8065dcc-0d30-4700-ade9-500b481a3b7b": {
            "tribe": "Danian",
            "stats": {
                "courage": 35,
                "wisdom": 50,
                "speed": 40,
                "power": 55,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a8065dcc-0d30-4700-ade9-500b481a3b7b",
            "cardId": "",
            "name": "Junda",
            "chaoticId": "62",
            "cardImage": "https://i.imgur.com/B7zpmUw.png",
            "thumb": "https://i.imgur.com/FUPKxn6.jpeg"
        },
        "75c28495-6f13-4c3b-9dc9-2baceb14847d": {
            "tribe": "Danian",
            "stats": {
                "courage": 25,
                "wisdom": 70,
                "speed": 25,
                "power": 20,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "75c28495-6f13-4c3b-9dc9-2baceb14847d",
            "cardId": "",
            "name": "Kannen",
            "chaoticId": "63",
            "cardImage": "https://i.imgur.com/7ODcmtc.png",
            "thumb": "https://i.imgur.com/L3ByIgg.jpeg"
        },
        "ef30bdc7-607e-4db4-aa33-5a6e677b0ca4": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 55,
                "speed": 35,
                "power": 30,
                "energy": 45,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ef30bdc7-607e-4db4-aa33-5a6e677b0ca4",
            "cardId": "",
            "name": "Kebna",
            "chaoticId": "64",
            "cardImage": "https://i.imgur.com/PHmb0Ul.png",
            "thumb": "https://i.imgur.com/5lJvg3x.jpeg"
        },
        "d3086ef2-c1d3-4639-ae83-9f5ce6921e60": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 45,
                "speed": 65,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "d3086ef2-c1d3-4639-ae83-9f5ce6921e60",
            "cardId": "",
            "name": "Kerric",
            "chaoticId": "37",
            "cardImage": "https://i.imgur.com/V7nUOqX.png",
            "thumb": ""
        },
        "17b7998e-c304-4cdd-9148-27ef00b9fabf": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 85,
                "speed": 20,
                "power": 25,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "17b7998e-c304-4cdd-9148-27ef00b9fabf",
            "cardId": "",
            "name": "Khybon",
            "chaoticId": "38",
            "cardImage": "https://i.imgur.com/o3xgXWo.png",
            "thumb": ""
        },
        "1f344f28-9db6-4f4d-b8ea-813807421a5e": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 30,
                "speed": 65,
                "power": 95,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "1f344f28-9db6-4f4d-b8ea-813807421a5e",
            "cardId": "",
            "name": "Klasp",
            "chaoticId": "39",
            "cardImage": "https://i.imgur.com/HKhiyzj.png",
            "thumb": ""
        },
        "e0efc1a1-b719-4b96-9989-d665e3cbccd7": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 10,
                "wisdom": 20,
                "speed": 60,
                "power": 85,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e0efc1a1-b719-4b96-9989-d665e3cbccd7",
            "cardId": "",
            "name": "Krekk",
            "chaoticId": "40",
            "cardImage": "https://i.imgur.com/khj8lJ6.png",
            "thumb": ""
        },
        "632b8a12-2da9-4555-ba3b-96c4076c5925": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 25,
                "speed": 45,
                "power": 85,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "632b8a12-2da9-4555-ba3b-96c4076c5925",
            "cardId": "",
            "name": "Kughar",
            "chaoticId": "41",
            "cardImage": "https://i.imgur.com/eENtG18.png",
            "thumb": ""
        },
        "ecb7f441-4306-48fa-be0e-8b251b3ad85a": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 35,
                "wisdom": 50,
                "speed": 30,
                "power": 20,
                "energy": 30,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "ecb7f441-4306-48fa-be0e-8b251b3ad85a",
            "cardId": "",
            "name": "Laarina",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/NNXHOsd.png",
            "thumb": ""
        },
        "7dc30f84-5365-4ae8-96a7-32378fd0e3a8": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 70,
                "speed": 25,
                "power": 65,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "7dc30f84-5365-4ae8-96a7-32378fd0e3a8",
            "cardId": "",
            "name": "Lhad",
            "chaoticId": "65",
            "cardImage": "https://i.imgur.com/dnIA539.png",
            "thumb": "https://i.imgur.com/U7LnelL.jpeg"
        },
        "be2ad1ae-c165-4e99-aacd-e248c4fb2906": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 50,
                "speed": 95,
                "power": 115,
                "energy": 65,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "be2ad1ae-c165-4e99-aacd-e248c4fb2906",
            "cardId": "",
            "name": "Lord Van Bloot",
            "chaoticId": "42",
            "cardImage": "https://i.imgur.com/w7EpSme.png",
            "thumb": ""
        },
        "c16eb039-33b0-40dc-87b3-571704644c89": {
            "tribe": "Danian",
            "stats": {
                "courage": 30,
                "wisdom": 70,
                "speed": 30,
                "power": 35,
                "energy": 25,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c16eb039-33b0-40dc-87b3-571704644c89",
            "cardId": "",
            "name": "Lore",
            "chaoticId": "66",
            "cardImage": "https://i.imgur.com/XUpr5zm.png",
            "thumb": "https://i.imgur.com/3Mr81c6.jpeg"
        },
        "ebbb8ba9-a151-4ad7-9bef-7e042704acb4": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 25,
                "speed": 30,
                "power": 60,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "ebbb8ba9-a151-4ad7-9bef-7e042704acb4",
            "cardId": "",
            "name": "Maglax",
            "chaoticId": "14",
            "cardImage": "https://i.imgur.com/hLvY8bb.png",
            "thumb": ""
        },
        "a2eba91c-0409-4d2d-baab-101d1ced39f9": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 20,
                "speed": 35,
                "power": 60,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a2eba91c-0409-4d2d-baab-101d1ced39f9",
            "cardId": "",
            "name": "Magmon",
            "chaoticId": "43",
            "cardImage": "https://i.imgur.com/RtscbHj.png",
            "thumb": ""
        },
        "06090dfb-b654-4ee2-9d87-810cdf65298d": {
            "tribe": "Danian",
            "stats": {
                "courage": 30,
                "wisdom": 45,
                "speed": 35,
                "power": 25,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "06090dfb-b654-4ee2-9d87-810cdf65298d",
            "cardId": "",
            "name": "Mallash",
            "chaoticId": "67",
            "cardImage": "https://i.imgur.com/bh3qZIP.png",
            "thumb": "https://i.imgur.com/dOcB9BD.jpeg"
        },
        "32fa7a0c-4734-4570-81c5-40aef59ad9b2": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 55,
                "power": 75,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "32fa7a0c-4734-4570-81c5-40aef59ad9b2",
            "cardId": "",
            "name": "Malvadine",
            "chaoticId": "75",
            "cardImage": "https://i.imgur.com/KZ0Kmbd.png",
            "thumb": "https://i.imgur.com/lPMnLRp.jpeg"
        },
        "bb823838-b779-4f8e-9362-127377929f52": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 45,
                "wisdom": 65,
                "speed": 40,
                "power": 40,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "bb823838-b779-4f8e-9362-127377929f52",
            "cardId": "",
            "name": "Marquis Darini",
            "chaoticId": "76",
            "cardImage": "https://i.imgur.com/U8YehY9.png",
            "thumb": "https://i.imgur.com/3UqY7L7.jpeg"
        },
        "df520d4d-f0dd-426e-aec7-cd678369acfd": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 100,
                "wisdom": 80,
                "speed": 50,
                "power": 65,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "df520d4d-f0dd-426e-aec7-cd678369acfd",
            "cardId": "",
            "name": "Maxxor",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/07QFYyO.png",
            "thumb": ""
        },
        "1fd7881c-8ca7-4d21-b4c3-6a460418c527": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 20,
                "wisdom": 30,
                "speed": 60,
                "power": 75,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "1fd7881c-8ca7-4d21-b4c3-6a460418c527",
            "cardId": "",
            "name": "Miklon",
            "chaoticId": "44",
            "cardImage": "https://i.imgur.com/ECCIj2x.png",
            "thumb": ""
        },
        "41d1533b-8af2-4d49-b71f-0d7460fe8e45": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 90,
                "speed": 35,
                "power": 30,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "41d1533b-8af2-4d49-b71f-0d7460fe8e45",
            "cardId": "",
            "name": "Najarin",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/9pfA7ZA.png",
            "thumb": ""
        },
        "05a22c4f-e28f-43c9-a91e-26730227fb23": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 70,
                "wisdom": 40,
                "speed": 55,
                "power": 60,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "05a22c4f-e28f-43c9-a91e-26730227fb23",
            "cardId": "",
            "name": "Nauthilax",
            "chaoticId": "45",
            "cardImage": "https://i.imgur.com/6DJIzgJ.png",
            "thumb": ""
        },
        "a546a1b1-d478-45e5-bf86-1a41aaea47ef": {
            "tribe": "Danian",
            "stats": {
                "courage": 55,
                "wisdom": 50,
                "speed": 40,
                "power": 60,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "a546a1b1-d478-45e5-bf86-1a41aaea47ef",
            "cardId": "",
            "name": "Odu-Bathax",
            "chaoticId": "68",
            "cardImage": "https://i.imgur.com/Fewq0vJ.png",
            "thumb": "https://i.imgur.com/lUynr9d.jpeg"
        },
        "39262e46-166d-4ac6-898d-20b8dcf390a9": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 55,
                "speed": 30,
                "power": 25,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "39262e46-166d-4ac6-898d-20b8dcf390a9",
            "cardId": "",
            "name": "Owis",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/K8I5NZL.png",
            "thumb": ""
        },
        "26a1d7d5-9825-4158-a5a4-af78371d56c2": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 55,
                "wisdom": 70,
                "speed": 30,
                "power": 35,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "26a1d7d5-9825-4158-a5a4-af78371d56c2",
            "cardId": "",
            "name": "Prince Mudeenu",
            "chaoticId": "77",
            "cardImage": "https://i.imgur.com/KOtibqe.png",
            "thumb": ""
        },
        "23602603-d6bb-466f-bfcc-e9f26d493dd3": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 55,
                "speed": 40,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "23602603-d6bb-466f-bfcc-e9f26d493dd3",
            "cardId": "",
            "name": "Psimion",
            "chaoticId": "18",
            "cardImage": "https://i.imgur.com/aJpuuhR.png",
            "thumb": ""
        },
        "d29932a5-48d9-4095-b492-946af19189a1": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 25,
                "wisdom": 40,
                "speed": 65,
                "power": 80,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d29932a5-48d9-4095-b492-946af19189a1",
            "cardId": "",
            "name": "Pyrithion",
            "chaoticId": "46",
            "cardImage": "https://i.imgur.com/yhOd3ih.png",
            "thumb": ""
        },
        "37640494-fee3-46a9-abca-9ef392d9281b": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 55,
                "wisdom": 55,
                "speed": 90,
                "power": 40,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "37640494-fee3-46a9-abca-9ef392d9281b",
            "cardId": "",
            "name": "Qwun",
            "chaoticId": "78",
            "cardImage": "https://i.imgur.com/5THJOeF.png",
            "thumb": "https://i.imgur.com/IF6tkmx.jpeg"
        },
        "54cdde1d-8130-42c2-ace2-31d7c2f04530": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 30,
                "speed": 60,
                "power": 60,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "54cdde1d-8130-42c2-ace2-31d7c2f04530",
            "cardId": "",
            "name": "Rarran",
            "chaoticId": "47",
            "cardImage": "https://i.imgur.com/5XzHLuR.png",
            "thumb": ""
        },
        "32a4a89e-5baa-47d9-9628-0a71bce2c334": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 60,
                "speed": 40,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "32a4a89e-5baa-47d9-9628-0a71bce2c334",
            "cardId": "",
            "name": "Rellim",
            "chaoticId": "19",
            "cardImage": "https://i.imgur.com/f4KvfWW.png",
            "thumb": ""
        },
        "721a70bb-65b2-42d0-912f-863ae9588966": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 25,
                "speed": 50,
                "power": 90,
                "energy": 70,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "721a70bb-65b2-42d0-912f-863ae9588966",
            "cardId": "",
            "name": "Rothar",
            "chaoticId": "48",
            "cardImage": "https://i.imgur.com/3f9mKbP.png",
            "thumb": ""
        },
        "7b84176a-ff12-4036-88f1-f9a883803584": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 30,
                "speed": 70,
                "power": 50,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "7b84176a-ff12-4036-88f1-f9a883803584",
            "cardId": "",
            "name": "Shimmark",
            "chaoticId": "79",
            "cardImage": "https://i.imgur.com/alo8ONh.png",
            "thumb": "https://i.imgur.com/qx66XrA.jpeg"
        },
        "429670d8-2259-494a-b287-dcb24fea209d": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 60,
                "speed": 55,
                "power": 45,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "429670d8-2259-494a-b287-dcb24fea209d",
            "cardId": "",
            "name": "Siado",
            "chaoticId": "80",
            "cardImage": "https://i.imgur.com/NiVXa5o.png",
            "thumb": "https://i.imgur.com/PsDBFat.jpeg"
        },
        "9fc86f75-d936-4ad1-a07e-5029162b9277": {
            "tribe": "Danian",
            "stats": {
                "courage": 55,
                "wisdom": 40,
                "speed": 55,
                "power": 45,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "9fc86f75-d936-4ad1-a07e-5029162b9277",
            "cardId": "",
            "name": "Skartalas",
            "chaoticId": "69",
            "cardImage": "https://i.imgur.com/hpP9X60.png",
            "thumb": ""
        },
        "4c532d91-c1d3-4e5e-97e4-9bf177d3583a": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 55,
                "speed": 40,
                "power": 25,
                "energy": 35,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4c532d91-c1d3-4e5e-97e4-9bf177d3583a",
            "cardId": "",
            "name": "Skithia",
            "chaoticId": "49",
            "cardImage": "https://i.imgur.com/zr5RZ9M.png",
            "thumb": ""
        },
        "e5f0002a-4d86-406b-bd9a-11192b1d7e4c": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 80,
                "wisdom": 60,
                "speed": 20,
                "power": 65,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e5f0002a-4d86-406b-bd9a-11192b1d7e4c",
            "cardId": "",
            "name": "Skreeth",
            "chaoticId": "50",
            "cardImage": "https://i.imgur.com/UghHTyA.png",
            "thumb": ""
        },
        "4c64a20a-099e-4249-9869-8e3587240ccb": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 35,
                "speed": 40,
                "power": 35,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "4c64a20a-099e-4249-9869-8e3587240ccb",
            "cardId": "",
            "name": "Slurhk",
            "chaoticId": "20",
            "cardImage": "https://i.imgur.com/FJYgHTN.png",
            "thumb": ""
        },
        "30634f15-601f-42c3-a8de-6ec8244ef98b": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 65,
                "speed": 40,
                "power": 25,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "30634f15-601f-42c3-a8de-6ec8244ef98b",
            "cardId": "",
            "name": "Sobtjek",
            "chaoticId": "81",
            "cardImage": "https://i.imgur.com/WFyyTBc.png",
            "thumb": "https://i.imgur.com/Bo6te1n.jpeg"
        },
        "8712f037-3127-4090-aa6f-07f14c53e0c1": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 65,
                "speed": 35,
                "power": 60,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "8712f037-3127-4090-aa6f-07f14c53e0c1",
            "cardId": "",
            "name": "Solvis",
            "chaoticId": "51",
            "cardImage": "https://i.imgur.com/oOjvna9.png",
            "thumb": ""
        },
        "f82ad7e2-28e1-49fd-82e0-6e450b624f7e": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 35,
                "wisdom": 25,
                "speed": 40,
                "power": 45,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "f82ad7e2-28e1-49fd-82e0-6e450b624f7e",
            "cardId": "",
            "name": "Staluk",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/daAuWsG.png",
            "thumb": ""
        },
        "16558bd8-28d8-4844-a07b-fcfa85ee868a": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 20,
                "speed": 90,
                "power": 65,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "16558bd8-28d8-4844-a07b-fcfa85ee868a",
            "cardId": "",
            "name": "Takinom",
            "chaoticId": "52",
            "cardImage": "https://i.imgur.com/8dxKKq4.png",
            "thumb": ""
        },
        "4752f936-f384-44d5-969a-a03367ea3e92": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 40,
                "speed": 30,
                "power": 45,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "4752f936-f384-44d5-969a-a03367ea3e92",
            "cardId": "",
            "name": "Tangath Toborn",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/wuLEJ8I.png",
            "thumb": ""
        },
        "d5e33420-030f-4ffe-8eae-f28e664be87d": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 90,
                "wisdom": 90,
                "speed": 25,
                "power": 45,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d5e33420-030f-4ffe-8eae-f28e664be87d",
            "cardId": "",
            "name": "Tartarek",
            "chaoticId": "23",
            "cardImage": "https://i.imgur.com/Yzf4zX6.png",
            "thumb": ""
        },
        "ebab460d-ddf5-46bd-b00b-7147c1520852": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 65,
                "wisdom": 50,
                "speed": 20,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ebab460d-ddf5-46bd-b00b-7147c1520852",
            "cardId": "",
            "name": "Tiaane",
            "chaoticId": "82",
            "cardImage": "https://i.imgur.com/9abKuHu.png",
            "thumb": "https://i.imgur.com/URvVENC.jpeg"
        },
        "834e00c8-e365-45e2-ab6e-f88011d799e0": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 40,
                "speed": 50,
                "power": 70,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "834e00c8-e365-45e2-ab6e-f88011d799e0",
            "cardId": "",
            "name": "Toxis",
            "chaoticId": "53",
            "cardImage": "https://i.imgur.com/JZWx4Sd.png",
            "thumb": ""
        },
        "c6f7f96a-b0d4-4a68-a376-c54096cfd0c8": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 35,
                "wisdom": 60,
                "speed": 60,
                "power": 45,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c6f7f96a-b0d4-4a68-a376-c54096cfd0c8",
            "cardId": "",
            "name": "Ubliqun",
            "chaoticId": "83",
            "cardImage": "https://i.imgur.com/Z8BWY00.png",
            "thumb": "https://i.imgur.com/KYY9JiF.jpeg"
        },
        "36b40907-f8ec-4afa-8369-21eb19bec76c": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 70,
                "speed": 35,
                "power": 20,
                "energy": 25,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "36b40907-f8ec-4afa-8369-21eb19bec76c",
            "cardId": "",
            "name": "Ulmar",
            "chaoticId": "54",
            "cardImage": "https://i.imgur.com/RExY8uV.png",
            "thumb": ""
        },
        "5926c4cf-c8a6-4386-8391-dc8d1fab73b1": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 40,
                "speed": 60,
                "power": 60,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "5926c4cf-c8a6-4386-8391-dc8d1fab73b1",
            "cardId": "",
            "name": "Uro",
            "chaoticId": "84",
            "cardImage": "https://i.imgur.com/LElPsSV.png",
            "thumb": "https://i.imgur.com/LQbbOQf.jpeg"
        },
        "c6b0d000-a197-4cd1-ae09-e48c66e66332": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 15,
                "speed": 25,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "c6b0d000-a197-4cd1-ae09-e48c66e66332",
            "cardId": "",
            "name": "Valanii Levaan",
            "chaoticId": "70",
            "cardImage": "https://i.imgur.com/hV80oft.png",
            "thumb": ""
        },
        "1f4dad4e-d7b3-4786-95d6-4567c800f08a": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 40,
                "speed": 25,
                "power": 80,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "1f4dad4e-d7b3-4786-95d6-4567c800f08a",
            "cardId": "",
            "name": "Velreth",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/rFH8LgA.png",
            "thumb": ""
        },
        "ca09e253-d906-4cfa-91d8-cc80987f2da5": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 50,
                "speed": 35,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ca09e253-d906-4cfa-91d8-cc80987f2da5",
            "cardId": "",
            "name": "Vidav",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/2Y6LeVO.png",
            "thumb": ""
        },
        "08312444-5dd5-46b5-b5d5-583bb59a7dde": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 35,
                "speed": 40,
                "power": 60,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "08312444-5dd5-46b5-b5d5-583bb59a7dde",
            "cardId": "",
            "name": "Vinta",
            "chaoticId": "85",
            "cardImage": "https://i.imgur.com/MIzNxqV.png",
            "thumb": "https://i.imgur.com/krRCnzB.jpeg"
        },
        "da12484b-0a13-4ae6-91e8-5230a37fce34": {
            "tribe": "Danian",
            "stats": {
                "courage": 40,
                "wisdom": 30,
                "speed": 25,
                "power": 55,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "da12484b-0a13-4ae6-91e8-5230a37fce34",
            "cardId": "",
            "name": "Wamma",
            "chaoticId": "71",
            "cardImage": "https://i.imgur.com/WUzrMGr.png",
            "thumb": ""
        },
        "d7064eef-d1a9-458a-b7d0-c4b90064c8b7": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 45,
                "speed": 60,
                "power": 25,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "d7064eef-d1a9-458a-b7d0-c4b90064c8b7",
            "cardId": "",
            "name": "Xaerv",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/enaANCK.png",
            "thumb": ""
        },
        "f5e5e1af-60d1-4d33-8753-bd6fff3374bd": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 95,
                "wisdom": 35,
                "speed": 15,
                "power": 40,
                "energy": 20,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "f5e5e1af-60d1-4d33-8753-bd6fff3374bd",
            "cardId": "",
            "name": "Xield",
            "chaoticId": "55",
            "cardImage": "https://i.imgur.com/U94Q84k.png",
            "thumb": ""
        },
        "b0702f2c-2559-4bf8-9776-3ebf8cbeeb67": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 20,
                "wisdom": 20,
                "speed": 20,
                "power": 20,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "b0702f2c-2559-4bf8-9776-3ebf8cbeeb67",
            "cardId": "",
            "name": "Yokkis",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/ornGcud.png",
            "thumb": ""
        },
        "152f0434-c890-41a6-a180-19f52fb7af84": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 40,
                "speed": 40,
                "power": 55,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "152f0434-c890-41a6-a180-19f52fb7af84",
            "cardId": "",
            "name": "Zalic",
            "chaoticId": "28",
            "cardImage": "https://i.imgur.com/gluaQjf.png",
            "thumb": ""
        },
        "54e85c9c-89c8-4b4e-b160-a80b479ba452": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 35,
                "speed": 25,
                "power": 75,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "54e85c9c-89c8-4b4e-b160-a80b479ba452",
            "cardId": "",
            "name": "Zaur",
            "chaoticId": "56",
            "cardImage": "https://i.imgur.com/TZLjBuz.png",
            "thumb": ""
        },
        "763fb0d8-da56-4253-902d-36d3beda3f06": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 65,
                "wisdom": 40,
                "speed": 60,
                "power": 60,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "763fb0d8-da56-4253-902d-36d3beda3f06",
            "cardId": "",
            "name": "Zhade",
            "chaoticId": "86",
            "cardImage": "https://i.imgur.com/Pkmr8IR.png",
            "thumb": "https://i.imgur.com/TjssEA2.jpeg"
        },
        "f92fa34a-013d-4688-b4c7-939f6c21171b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 65,
                "speed": 45,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "f92fa34a-013d-4688-b4c7-939f6c21171b",
            "cardId": "",
            "name": "Aggroar",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/iJSWeJ6.png",
            "thumb": ""
        },
        "594cefd2-cd31-4ec5-9c7f-0d978e1b3103": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 55,
                "wisdom": 70,
                "speed": 55,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "594cefd2-cd31-4ec5-9c7f-0d978e1b3103",
            "cardId": "",
            "name": "Arkanin",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/fHDnhuk.png",
            "thumb": ""
        },
        "79901482-44da-4e3b-ae3f-ec85727b38f8": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 50,
                "speed": 25,
                "power": 35,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "79901482-44da-4e3b-ae3f-ec85727b38f8",
            "cardId": "",
            "name": "Balaan",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/Lc4oXej.png",
            "thumb": "https://i.imgur.com/pwBqdwW.jpeg"
        },
        "2f648770-daad-4942-aeee-5ca5ce1dd577": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 50,
                "speed": 40,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "2f648770-daad-4942-aeee-5ca5ce1dd577",
            "cardId": "",
            "name": "Bierk",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/CP5CX0j.png",
            "thumb": "https://i.imgur.com/V8jKjL6.jpeg"
        },
        "922da516-cb50-4c30-933d-29c57618603b": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 35,
                "speed": 70,
                "power": 50,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "922da516-cb50-4c30-933d-29c57618603b",
            "cardId": "",
            "name": "Daj Huun",
            "chaoticId": "18",
            "cardImage": "https://i.imgur.com/1ikCIUT.png",
            "thumb": ""
        },
        "c242dfa4-7b53-4ceb-af82-029a4e64cc47": {
            "tribe": "Danian",
            "stats": {
                "courage": 35,
                "wisdom": 65,
                "speed": 25,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "c242dfa4-7b53-4ceb-af82-029a4e64cc47",
            "cardId": "",
            "name": "Dasalin",
            "chaoticId": "19",
            "cardImage": "https://i.imgur.com/HLz6coR.png",
            "thumb": ""
        },
        "475108f7-359a-46b1-b254-bacb9316b772": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 55,
                "wisdom": 70,
                "speed": 55,
                "power": 35,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "475108f7-359a-46b1-b254-bacb9316b772",
            "cardId": "",
            "name": "Dibanni",
            "chaoticId": "32",
            "cardImage": "https://i.imgur.com/ibKoNQ9.png",
            "thumb": ""
        },
        "cb4d4845-eec3-4b5f-b81b-dc3056b4fdd1": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 25,
                "power": 35,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "cb4d4845-eec3-4b5f-b81b-dc3056b4fdd1",
            "cardId": "",
            "name": "Dubin",
            "chaoticId": "20",
            "cardImage": "https://i.imgur.com/h5OO9e0.png",
            "thumb": ""
        },
        "fba62105-cb0b-4481-b4e4-2c2450ae6181": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 35,
                "speed": 55,
                "power": 65,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "fba62105-cb0b-4481-b4e4-2c2450ae6181",
            "cardId": "",
            "name": "Faash",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/zgEgHl5.png",
            "thumb": ""
        },
        "c06a8588-2fca-4c3b-91d0-e388f2bc1119": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 75,
                "speed": 30,
                "power": 25,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c06a8588-2fca-4c3b-91d0-e388f2bc1119",
            "cardId": "",
            "name": "Garv",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/V7Gq5Gq.png",
            "thumb": ""
        },
        "06143bce-4efb-488b-a402-555d0f762603": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 45,
                "speed": 40,
                "power": 70,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "06143bce-4efb-488b-a402-555d0f762603",
            "cardId": "",
            "name": "Geltod",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/hos3l8x.png",
            "thumb": ""
        },
        "ed087320-6de4-40d4-9266-977b0d928e33": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 55,
                "power": 55,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ed087320-6de4-40d4-9266-977b0d928e33",
            "cardId": "",
            "name": "Hammerdoom Chantcaller",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/okebcZT.png",
            "thumb": ""
        },
        "18496613-59ce-4977-8507-4b50f60aacbb": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 65,
                "speed": 50,
                "power": 35,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "18496613-59ce-4977-8507-4b50f60aacbb",
            "cardId": "",
            "name": "Hune Marquard",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/2vNrI6I.png",
            "thumb": ""
        },
        "6bfdae3c-372c-4544-a23b-f78912879a8f": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 60,
                "speed": 55,
                "power": 70,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "6bfdae3c-372c-4544-a23b-f78912879a8f",
            "cardId": "",
            "name": "Illazar",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/zeTozVr.png",
            "thumb": ""
        },
        "b2b982e3-06dd-4992-aaf1-6c6ad0ec2390": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 65,
                "speed": 25,
                "power": 65,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "b2b982e3-06dd-4992-aaf1-6c6ad0ec2390",
            "cardId": "",
            "name": "Illexia, The Danian Queen",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/NAUWQvv.png",
            "thumb": ""
        },
        "e253d249-c708-44b0-8073-dfdb1575c692": {
            "tribe": "Danian",
            "stats": {
                "courage": 45,
                "wisdom": 65,
                "speed": 30,
                "power": 35,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "e253d249-c708-44b0-8073-dfdb1575c692",
            "cardId": "",
            "name": "Jaal",
            "chaoticId": "23",
            "cardImage": "https://i.imgur.com/i4pbXJd.png",
            "thumb": ""
        },
        "8eca78eb-b125-43b9-b4cb-f4629acb9c48": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 30,
                "speed": 55,
                "power": 70,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "8eca78eb-b125-43b9-b4cb-f4629acb9c48",
            "cardId": "",
            "name": "Kamangareth",
            "chaoticId": "9",
            "cardImage": "https://i.imgur.com/rClPf2P.png",
            "thumb": ""
        },
        "29e0b129-11ed-4484-a751-8324f1ca3b53": {
            "tribe": "Danian",
            "stats": {
                "courage": 35,
                "wisdom": 35,
                "speed": 55,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "29e0b129-11ed-4484-a751-8324f1ca3b53",
            "cardId": "",
            "name": "Kelvedran",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/MwPbWNp.png",
            "thumb": ""
        },
        "2ed2973c-dc6e-4dad-9862-8c0b37a68c0b": {
            "tribe": "Danian",
            "stats": {
                "courage": 35,
                "wisdom": 35,
                "speed": 25,
                "power": 50,
                "energy": 30,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "2ed2973c-dc6e-4dad-9862-8c0b37a68c0b",
            "cardId": "",
            "name": "Khavakk",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/QDtcZWa.png",
            "thumb": "https://i.imgur.com/kfH7KbQ.jpeg"
        },
        "ac808380-895d-4f3b-bce9-74fcc103ebf8": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 65,
                "speed": 25,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "ac808380-895d-4f3b-bce9-74fcc103ebf8",
            "cardId": "",
            "name": "Khritlaan",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/og6KPky.png",
            "thumb": "https://i.imgur.com/A8CCDVK.jpeg"
        },
        "489fce85-f0b7-4987-a8ce-c151f8bc2e43": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 50,
                "speed": 40,
                "power": 55,
                "energy": 65,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "489fce85-f0b7-4987-a8ce-c151f8bc2e43",
            "cardId": "",
            "name": "Kolmo",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/nVTONJv.png",
            "thumb": ""
        },
        "d3f28a00-218d-4aee-beef-c9cc6b016a63": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 60,
                "speed": 35,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "d3f28a00-218d-4aee-beef-c9cc6b016a63",
            "cardId": "",
            "name": "Lomma",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/uYSR3xh.png",
            "thumb": ""
        },
        "14be33f6-4c5c-4471-a777-5221a216407f": {
            "tribe": "Danian",
            "stats": {
                "courage": 35,
                "wisdom": 65,
                "speed": 25,
                "power": 60,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "14be33f6-4c5c-4471-a777-5221a216407f",
            "cardId": "",
            "name": "Mahrrant",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/WuIu8ZL.png",
            "thumb": ""
        },
        "e04ff33d-2e53-46fe-84da-95ef76d5650a": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 50,
                "speed": 70,
                "power": 50,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "e04ff33d-2e53-46fe-84da-95ef76d5650a",
            "cardId": "",
            "name": "Munnari",
            "chaoticId": "34",
            "cardImage": "https://i.imgur.com/ETO6MFe.png",
            "thumb": "https://i.imgur.com/pLdJJ10.jpeg"
        },
        "9df4e610-0fe4-4be1-a932-297607938d3b": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 45,
                "speed": 40,
                "power": 70,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "9df4e610-0fe4-4be1-a932-297607938d3b",
            "cardId": "",
            "name": "Narfall",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/Jf5rWXz.png",
            "thumb": ""
        },
        "da6bbb08-9a05-47bd-9295-e5544178a468": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 45,
                "speed": 55,
                "power": 55,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "da6bbb08-9a05-47bd-9295-e5544178a468",
            "cardId": "",
            "name": "Ornathor",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/Z9wCV5M.png",
            "thumb": ""
        },
        "7aa3d299-be46-421d-acee-6f6e37d4ec98": {
            "tribe": "Danian",
            "stats": {
                "courage": 35,
                "wisdom": 50,
                "speed": 25,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "7aa3d299-be46-421d-acee-6f6e37d4ec98",
            "cardId": "",
            "name": "Ramarhvir, The Danian Hivebringer",
            "chaoticId": "28",
            "cardImage": "https://i.imgur.com/RVC3iiN.png",
            "thumb": ""
        },
        "327b62dc-1f88-4f4f-a7bc-d84f3fde4f9d": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 70,
                "speed": 40,
                "power": 20,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "327b62dc-1f88-4f4f-a7bc-d84f3fde4f9d",
            "cardId": "",
            "name": "Raznus, Ambassador to the Danians",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/TExaXHs.png",
            "thumb": ""
        },
        "b3fcb9d5-6e8a-41d0-88ff-dd5b1aa55389": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 45,
                "wisdom": 40,
                "speed": 45,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "b3fcb9d5-6e8a-41d0-88ff-dd5b1aa55389",
            "cardId": "",
            "name": "Ribbian",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/jLhSZgs.png",
            "thumb": ""
        },
        "d242857f-20b4-4b8d-9db7-361462f1f4cb": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 65,
                "speed": 20,
                "power": 65,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d242857f-20b4-4b8d-9db7-361462f1f4cb",
            "cardId": "",
            "name": "Slufurah",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/T7WVz72.png",
            "thumb": ""
        },
        "28b569c5-35b0-4e5a-9e62-1de8d58e121a": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 75,
                "speed": 40,
                "power": 45,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "28b569c5-35b0-4e5a-9e62-1de8d58e121a",
            "cardId": "",
            "name": "Strikto",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/6rucOS0.png",
            "thumb": ""
        },
        "46a92a3e-d9a6-4588-b807-2f1057cffb52": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 45,
                "speed": 55,
                "power": 65,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "46a92a3e-d9a6-4588-b807-2f1057cffb52",
            "cardId": "",
            "name": "Swassa",
            "chaoticId": "14",
            "cardImage": "https://i.imgur.com/SibHzHC.png",
            "thumb": ""
        },
        "f516ff5a-de7d-4912-a6a4-1e490784fc46": {
            "tribe": "Danian",
            "stats": {
                "courage": 60,
                "wisdom": 55,
                "speed": 50,
                "power": 45,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "f516ff5a-de7d-4912-a6a4-1e490784fc46",
            "cardId": "",
            "name": "Tassanil",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/16con11.png",
            "thumb": ""
        },
        "d31e87c6-5561-4627-b249-093eaa7ce5ad": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 30,
                "speed": 75,
                "power": 85,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d31e87c6-5561-4627-b249-093eaa7ce5ad",
            "cardId": "",
            "name": "Ultadur",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/8Qv3WzS.png",
            "thumb": ""
        },
        "ad348e95-7846-45ab-964f-083f431f5dfe": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 65,
                "speed": 20,
                "power": 35,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "ad348e95-7846-45ab-964f-083f431f5dfe",
            "cardId": "",
            "name": "Yondaf",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/pYkNb1g.png",
            "thumb": ""
        },
        "138ce1ab-2abc-418a-9506-dfbd34b8908b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 50,
                "speed": 35,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "138ce1ab-2abc-418a-9506-dfbd34b8908b",
            "cardId": "",
            "name": "Arbeid",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/gBCcpob.png",
            "thumb": ""
        },
        "4cf65b88-2e6a-40d2-8935-0680883ac9e4": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 25,
                "speed": 15,
                "power": 55,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "4cf65b88-2e6a-40d2-8935-0680883ac9e4",
            "cardId": "",
            "name": "Atrapol",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/RlmKl2W.png",
            "thumb": ""
        },
        "7884fcd7-b360-4fdf-9935-ab5b5826c7f7": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 150,
                "wisdom": 50,
                "speed": 150,
                "power": 75,
                "energy": 70,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "7884fcd7-b360-4fdf-9935-ab5b5826c7f7",
            "cardId": "",
            "name": "Blazvatan, The Epic Warbeast",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/MlryCnD.png",
            "thumb": "https://i.imgur.com/EAKoLOY.jpeg"
        },
        "2563bbe1-4e44-4e61-889c-4c7851f2fc80": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 30,
                "power": 15,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "2563bbe1-4e44-4e61-889c-4c7851f2fc80",
            "cardId": "",
            "name": "Bylkian",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/0t4N6SQ.png",
            "thumb": ""
        },
        "c522a1df-3c7f-4289-86ed-79ac027ab1ab": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 95,
                "speed": 35,
                "power": 55,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c522a1df-3c7f-4289-86ed-79ac027ab1ab",
            "cardId": "",
            "name": "Clodor",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/dizmmUC.png",
            "thumb": ""
        },
        "77ab28eb-c0f2-49a2-9e7a-b22cae84c376": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 30,
                "wisdom": 60,
                "speed": 40,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "77ab28eb-c0f2-49a2-9e7a-b22cae84c376",
            "cardId": "",
            "name": "Drimesse",
            "chaoticId": "23",
            "cardImage": "https://i.imgur.com/Qscwc1n.png",
            "thumb": "https://i.imgur.com/a99JvxO.jpeg"
        },
        "75d9c2d0-ec1d-436d-852f-e4d8c357f37d": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 80,
                "speed": 50,
                "power": 20,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "75d9c2d0-ec1d-436d-852f-e4d8c357f37d",
            "cardId": "",
            "name": "Enre-hep",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/kEA9PkS.png",
            "thumb": "https://i.imgur.com/B79d7EQ.jpeg"
        },
        "f07c7ad0-8454-40fe-a5bc-4e1cb9d93945": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 20,
                "speed": 100,
                "power": 75,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "f07c7ad0-8454-40fe-a5bc-4e1cb9d93945",
            "cardId": "",
            "name": "Ere",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/CQfzzAS.png",
            "thumb": ""
        },
        "6a5b964a-895c-4af1-bc76-14124b223dd7": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 15,
                "wisdom": 15,
                "speed": 15,
                "power": 15,
                "energy": 15,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "6a5b964a-895c-4af1-bc76-14124b223dd7",
            "cardId": "",
            "name": "Fivarth",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/KWEFaJY.png",
            "thumb": ""
        },
        "8a95dee6-3a22-4232-aa65-1d3c797886d1": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 30,
                "speed": 65,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "8a95dee6-3a22-4232-aa65-1d3c797886d1",
            "cardId": "",
            "name": "Gnarlus",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/oIddR5f.png",
            "thumb": "https://i.imgur.com/RMJWNqR.jpeg"
        },
        "2439a14f-d181-4af2-909e-47fc31039c68": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 55,
                "speed": 55,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "2439a14f-d181-4af2-909e-47fc31039c68",
            "cardId": "",
            "name": "Hammerdoom Chantcaller, Assimilated",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/MJeUSCe.png",
            "thumb": ""
        },
        "ad1e909f-e381-4484-93cb-92cf11c22c19": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 35,
                "speed": 35,
                "power": 25,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "ad1e909f-e381-4484-93cb-92cf11c22c19",
            "cardId": "",
            "name": "Hifdan",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/KI7xtlt.png",
            "thumb": ""
        },
        "255cf185-5a16-4bd6-8846-622d41f33946": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 25,
                "wisdom": 25,
                "speed": 25,
                "power": 25,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "255cf185-5a16-4bd6-8846-622d41f33946",
            "cardId": "",
            "name": "Iparu",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/mT1vv4o.png",
            "thumb": ""
        },
        "6bd52dc5-d619-48dc-be24-13de3cb5027e": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 35,
                "speed": 40,
                "power": 30,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "6bd52dc5-d619-48dc-be24-13de3cb5027e",
            "cardId": "",
            "name": "Kalt",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/gqQOT8d.png",
            "thumb": ""
        },
        "cacc580c-6b8a-4f6d-bdd9-81af843b9437": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 40,
                "speed": 40,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "cacc580c-6b8a-4f6d-bdd9-81af843b9437",
            "cardId": "",
            "name": "Karraba",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/2IVJz6m.png",
            "thumb": ""
        },
        "1b19ae70-5888-4ffd-ab9a-56ae60d91523": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 65,
                "speed": 60,
                "power": 35,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "1b19ae70-5888-4ffd-ab9a-56ae60d91523",
            "cardId": "",
            "name": "Kinnianne, Ambassador to the Mipedians",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/ME6XgRE.png",
            "thumb": ""
        },
        "655e34fc-5037-46c3-8198-59107ea3bc01": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 30,
                "speed": 60,
                "power": 70,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "655e34fc-5037-46c3-8198-59107ea3bc01",
            "cardId": "",
            "name": "Kolmo, Assimilated",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/WQxTbK9.png",
            "thumb": ""
        },
        "7bdc9e4a-19a7-47a0-9659-f19d383d7a96": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 30,
                "wisdom": 50,
                "speed": 20,
                "power": 15,
                "energy": 20,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "7bdc9e4a-19a7-47a0-9659-f19d383d7a96",
            "cardId": "",
            "name": "Kopond",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/v2Yd3OX.png",
            "thumb": ""
        },
        "a794b0ac-3b99-4a9d-a040-fd30ffcac5ad": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 75,
                "wisdom": 90,
                "speed": 30,
                "power": 50,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a794b0ac-3b99-4a9d-a040-fd30ffcac5ad",
            "cardId": "",
            "name": "Lanker",
            "chaoticId": "28",
            "cardImage": "https://i.imgur.com/JCvnNPU.png",
            "thumb": "https://i.imgur.com/A7zOZiB.jpeg"
        },
        "cb70a62c-349c-4127-8e48-97d55d40011f": {
            "tribe": "Danian",
            "stats": {
                "courage": 35,
                "wisdom": 55,
                "speed": 35,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "cb70a62c-349c-4127-8e48-97d55d40011f",
            "cardId": "",
            "name": "Lobanne",
            "chaoticId": "18",
            "cardImage": "https://i.imgur.com/8hSNYcK.png",
            "thumb": ""
        },
        "9798b72d-21b1-4039-b733-9ee406e750ba": {
            "tribe": "Danian",
            "stats": {
                "courage": 20,
                "wisdom": 50,
                "speed": 25,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "9798b72d-21b1-4039-b733-9ee406e750ba",
            "cardId": "",
            "name": "Makrabon",
            "chaoticId": "19",
            "cardImage": "https://i.imgur.com/aXWhFXy.png",
            "thumb": "https://i.imgur.com/R4EWIOC.jpeg"
        },
        "fd9cbaf3-ee7a-4ab7-8e09-dd7c2f097548": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 20,
                "speed": 65,
                "power": 30,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "fd9cbaf3-ee7a-4ab7-8e09-dd7c2f097548",
            "cardId": "",
            "name": "Melke",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/gVsokbJ.png",
            "thumb": "https://i.imgur.com/h4MM7yM.jpeg"
        },
        "ab14a191-aad3-446f-afbc-cb07b9dfc471": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 50,
                "speed": 50,
                "power": 20,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ab14a191-aad3-446f-afbc-cb07b9dfc471",
            "cardId": "",
            "name": "Na-inna",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/JGHhyxC.png",
            "thumb": ""
        },
        "76f89084-2a7f-4413-909b-c7592e82ef24": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 70,
                "speed": 30,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "76f89084-2a7f-4413-909b-c7592e82ef24",
            "cardId": "",
            "name": "Olkiex",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/JctIDWG.png",
            "thumb": ""
        },
        "2292f48c-d7db-43d2-aef7-990a954af6f0": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 55,
                "wisdom": 60,
                "speed": 50,
                "power": 65,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "2292f48c-d7db-43d2-aef7-990a954af6f0",
            "cardId": "",
            "name": "Phelphor",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/eQ9E2om.png",
            "thumb": ""
        },
        "4999fdca-7597-4558-a545-05142899b6bc": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 45,
                "wisdom": 55,
                "speed": 45,
                "power": 25,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4999fdca-7597-4558-a545-05142899b6bc",
            "cardId": "",
            "name": "Ranun",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/hR8OzcI.png",
            "thumb": ""
        },
        "8ece9d01-e3c0-474b-8af8-7efa6e7cfdb6": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 75,
                "speed": 30,
                "power": 20,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "8ece9d01-e3c0-474b-8af8-7efa6e7cfdb6",
            "cardId": "",
            "name": "Raznus, Assimilated",
            "chaoticId": "20",
            "cardImage": "https://i.imgur.com/UTaJmMu.png",
            "thumb": ""
        },
        "3b358aa9-56af-4403-a270-89515dca33a8": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 75,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "3b358aa9-56af-4403-a270-89515dca33a8",
            "cardId": "",
            "name": "Saand",
            "chaoticId": "32",
            "cardImage": "https://i.imgur.com/QQaRwCM.png",
            "thumb": ""
        },
        "f0efedc8-6553-424c-9972-70b9e6af2e50": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 75,
                "wisdom": 20,
                "speed": 75,
                "power": 50,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "f0efedc8-6553-424c-9972-70b9e6af2e50",
            "cardId": "",
            "name": "Titanix",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/f0Mgzdq.png",
            "thumb": ""
        },
        "964378e4-b809-4b9e-adfb-9bcccda557be": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 20,
                "speed": 75,
                "power": 75,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "964378e4-b809-4b9e-adfb-9bcccda557be",
            "cardId": "",
            "name": "Uboraan",
            "chaoticId": "34",
            "cardImage": "https://i.imgur.com/8Tf3Enh.png",
            "thumb": ""
        },
        "bbcc7ef9-4ae3-4c05-8600-c6ae7be64aea": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 75,
                "wisdom": 75,
                "speed": 35,
                "power": 45,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "bbcc7ef9-4ae3-4c05-8600-c6ae7be64aea",
            "cardId": "",
            "name": "Viqtarr",
            "chaoticId": "9",
            "cardImage": "https://i.imgur.com/RVxP0tf.png",
            "thumb": ""
        },
        "600636f6-5fb6-47ac-a6bb-961212d2bb26": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 55,
                "wisdom": 75,
                "speed": 30,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "600636f6-5fb6-47ac-a6bb-961212d2bb26",
            "cardId": "",
            "name": "Vyll",
            "chaoticId": "14",
            "cardImage": "https://i.imgur.com/EZWp6y5.png",
            "thumb": ""
        },
        "442df38f-1313-4a8c-895d-8087c8927538": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 55,
                "speed": 30,
                "power": 25,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "442df38f-1313-4a8c-895d-8087c8927538",
            "cardId": "",
            "name": "Wytod",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/4mUpgO0.png",
            "thumb": ""
        },
        "38422fd5-300a-4991-8afa-762d10b9411b": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 35,
                "speed": 80,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "38422fd5-300a-4991-8afa-762d10b9411b",
            "cardId": "",
            "name": "Xelfe",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/2zmPtC8.png",
            "thumb": ""
        },
        "30bc3c08-a34f-41de-bb86-15815aba44d4": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 55,
                "wisdom": 25,
                "speed": 35,
                "power": 60,
                "energy": 35,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "30bc3c08-a34f-41de-bb86-15815aba44d4",
            "cardId": "",
            "name": "Zapetur",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/QMzShAj.png",
            "thumb": ""
        },
        "fddc921d-2fa4-42b7-acfa-31c5b0dfd84b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 70,
                "speed": 35,
                "power": 45,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "fddc921d-2fa4-42b7-acfa-31c5b0dfd84b",
            "cardId": "",
            "name": "Accato",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/VOaZNG6.png",
            "thumb": ""
        },
        "d0d8f74f-cb85-4a2a-ba34-f29d66d2549d": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 70,
                "speed": 45,
                "power": 40,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "d0d8f74f-cb85-4a2a-ba34-f29d66d2549d",
            "cardId": "",
            "name": "Akkrean",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/uQmpbwW.png",
            "thumb": ""
        },
        "7a3adeb3-222a-4d3a-bd70-aec2d0f200e7": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 55,
                "wisdom": 65,
                "speed": 20,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": true
            },
            "id": "7a3adeb3-222a-4d3a-bd70-aec2d0f200e7",
            "cardId": "",
            "name": "Alazdan",
            "chaoticId": "43",
            "cardImage": "https://i.imgur.com/OiZ76bS.png",
            "thumb": ""
        },
        "347a9bf5-8121-4b13-b12d-ca6aa7f1ca58": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 100,
                "wisdom": 100,
                "speed": 100,
                "power": 100,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "347a9bf5-8121-4b13-b12d-ca6aa7f1ca58",
            "cardId": "",
            "name": "Aokua",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/hUXI4Rp.png",
            "thumb": ""
        },
        "493d77b9-c89b-4e71-b9d1-1585fe434483": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 20,
                "wisdom": 55,
                "speed": 30,
                "power": 55,
                "energy": 25,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "493d77b9-c89b-4e71-b9d1-1585fe434483",
            "cardId": "",
            "name": "Asadab",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/1b4Hgt5.png",
            "thumb": ""
        },
        "637ef3e2-9608-471f-8690-7ce7497ee484": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 65,
                "wisdom": 40,
                "speed": 70,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "637ef3e2-9608-471f-8690-7ce7497ee484",
            "cardId": "",
            "name": "Bivike",
            "chaoticId": "44",
            "cardImage": "https://i.imgur.com/nRHgagU.png",
            "thumb": "https://i.imgur.com/iCc4P37.png"
        },
        "85e5dd80-699e-400f-817b-5d6ff8989faf": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 80,
                "wisdom": 35,
                "speed": 30,
                "power": 90,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "85e5dd80-699e-400f-817b-5d6ff8989faf",
            "cardId": "",
            "name": "Bladez",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/cHlija4.png",
            "thumb": ""
        },
        "7fa470ed-6189-415b-a518-2bf2fc26feab": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 45,
                "speed": 60,
                "power": 90,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "7fa470ed-6189-415b-a518-2bf2fc26feab",
            "cardId": "",
            "name": "Brimflame",
            "chaoticId": "18",
            "cardImage": "https://i.imgur.com/cRSoNzn.png",
            "thumb": ""
        },
        "6d854323-1598-484c-9a05-9b5e9c7e8af5": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 50,
                "speed": 35,
                "power": 40,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "6d854323-1598-484c-9a05-9b5e9c7e8af5",
            "cardId": "",
            "name": "Chaac",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/A2W6OZA.png",
            "thumb": ""
        },
        "ebdba87a-b5f2-48c3-926a-5512aaa9cc51": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 25,
                "wisdom": 55,
                "speed": 45,
                "power": 20,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ebdba87a-b5f2-48c3-926a-5512aaa9cc51",
            "cardId": "",
            "name": "Dakkamal, Melee Trainer",
            "chaoticId": "45",
            "cardImage": "https://i.imgur.com/Qu8iYPY.png",
            "thumb": ""
        },
        "6f643f4a-2c82-4401-885a-96364eed2742": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 35,
                "speed": 20,
                "power": 60,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "6f643f4a-2c82-4401-885a-96364eed2742",
            "cardId": "",
            "name": "Drazz",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/Ah8kvNV.png",
            "thumb": ""
        },
        "6ce5ce0b-4e0d-4650-b8da-444896cb35b3": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 45,
                "speed": 70,
                "power": 40,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "6ce5ce0b-4e0d-4650-b8da-444896cb35b3",
            "cardId": "",
            "name": "Ebberim",
            "chaoticId": "46",
            "cardImage": "https://i.imgur.com/TdSkk4e.png",
            "thumb": "https://i.imgur.com/9zKIUHP.jpeg"
        },
        "f101c3d2-69be-46fc-a4ea-0c32284d3c8d": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 50,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "f101c3d2-69be-46fc-a4ea-0c32284d3c8d",
            "cardId": "",
            "name": "Ebena'bakku",
            "chaoticId": "57",
            "cardImage": "https://i.imgur.com/dUVz2Lg.png",
            "thumb": ""
        },
        "75d7c4d2-2209-4c38-a6f2-1946e5824a7b": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 40,
                "wisdom": 85,
                "speed": 25,
                "power": 55,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "75d7c4d2-2209-4c38-a6f2-1946e5824a7b",
            "cardId": "",
            "name": "Erak'tabb",
            "chaoticId": "58",
            "cardImage": "https://i.imgur.com/VILwj0o.png",
            "thumb": ""
        },
        "a6f689f7-9562-494a-a843-d775884a68ef": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 35,
                "wisdom": 50,
                "speed": 30,
                "power": 45,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "a6f689f7-9562-494a-a843-d775884a68ef",
            "cardId": "",
            "name": "Fazkaal",
            "chaoticId": "47",
            "cardImage": "https://i.imgur.com/Q8muc49.png",
            "thumb": ""
        },
        "c9a1011a-d50c-4217-a1c2-64d5794e485f": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 90,
                "speed": 85,
                "power": 70,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c9a1011a-d50c-4217-a1c2-64d5794e485f",
            "cardId": "",
            "name": "Frafdo, The Hero",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/3Wz77kX.png",
            "thumb": ""
        },
        "8a411994-c8d2-4bd2-bbc3-f16394826b65": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 35,
                "wisdom": 45,
                "speed": 45,
                "power": 50,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "8a411994-c8d2-4bd2-bbc3-f16394826b65",
            "cardId": "",
            "name": "Gambreor",
            "chaoticId": "19",
            "cardImage": "https://i.imgur.com/v0Ht8dl.png",
            "thumb": ""
        },
        "2b0461b1-5e09-4a0a-8ad1-a73ffc72cc67": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 50,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "2b0461b1-5e09-4a0a-8ad1-a73ffc72cc67",
            "cardId": "",
            "name": "Gan'trak",
            "chaoticId": "59",
            "cardImage": "https://i.imgur.com/WFwUEa3.png",
            "thumb": ""
        },
        "923ae0db-804b-4618-87bc-6a1ff9fd14c5": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 25,
                "wisdom": 60,
                "speed": 40,
                "power": 35,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "923ae0db-804b-4618-87bc-6a1ff9fd14c5",
            "cardId": "",
            "name": "Grindaald",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/IRrASgU.png",
            "thumb": ""
        },
        "8d54675b-8011-4ec9-944c-06ab4532169c": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 75,
                "wisdom": 80,
                "speed": 50,
                "power": 50,
                "energy": 60,
                "fire": true,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "8d54675b-8011-4ec9-944c-06ab4532169c",
            "cardId": "",
            "name": "Gronmor",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/b1nEiNl.png",
            "thumb": ""
        },
        "f6db4d38-2e0f-4235-8684-446d30ad7195": {
            "tribe": "Danian",
            "stats": {
                "courage": 85,
                "wisdom": 45,
                "speed": 30,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "f6db4d38-2e0f-4235-8684-446d30ad7195",
            "cardId": "",
            "name": "Hermatred",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/K51nPY2.png",
            "thumb": ""
        },
        "6c2bf06c-a17e-4a37-b970-fc859e5828f8": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 55,
                "wisdom": 40,
                "speed": 85,
                "power": 60,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "6c2bf06c-a17e-4a37-b970-fc859e5828f8",
            "cardId": "",
            "name": "Ihun'kalin",
            "chaoticId": "60",
            "cardImage": "https://i.imgur.com/IJCstA7.png",
            "thumb": ""
        },
        "8f5a970d-b7c6-45d2-9853-f13f6ea50ddb": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 85,
                "speed": 60,
                "power": 35,
                "energy": 55,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "8f5a970d-b7c6-45d2-9853-f13f6ea50ddb",
            "cardId": "",
            "name": "Ikkatosh, Guardian of Nature",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/NxPZAu5.png",
            "thumb": ""
        },
        "7b5be0c3-f4fc-4f53-b1f7-b3f669b3e4e2": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 25,
                "speed": 35,
                "power": 90,
                "energy": 70,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "7b5be0c3-f4fc-4f53-b1f7-b3f669b3e4e2",
            "cardId": "",
            "name": "Ilx",
            "chaoticId": "20",
            "cardImage": "https://i.imgur.com/OFtt1UU.png",
            "thumb": ""
        },
        "826a310f-1977-4c3a-a6e2-f23544cb4d81": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 50,
                "speed": 60,
                "power": 35,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "826a310f-1977-4c3a-a6e2-f23544cb4d81",
            "cardId": "",
            "name": "Irrabeq",
            "chaoticId": "32",
            "cardImage": "https://i.imgur.com/MBoXW7q.png",
            "thumb": ""
        },
        "3758d118-c6b4-4049-9ec4-9a77562823b1": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 75,
                "speed": 40,
                "power": 50,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "3758d118-c6b4-4049-9ec4-9a77562823b1",
            "cardId": "",
            "name": "Issaley",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/Xt3SBeV.png",
            "thumb": ""
        },
        "97816d80-4f10-42dc-a74d-747796c0c216": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 30,
                "wisdom": 60,
                "speed": 75,
                "power": 25,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "97816d80-4f10-42dc-a74d-747796c0c216",
            "cardId": "",
            "name": "Jumbad",
            "chaoticId": "48",
            "cardImage": "https://i.imgur.com/CpGGzjF.png",
            "thumb": ""
        },
        "dba36da5-c3cb-4599-a0ca-ca6881406679": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 55,
                "speed": 40,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "dba36da5-c3cb-4599-a0ca-ca6881406679",
            "cardId": "",
            "name": "Kalanju",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/oawsJXE.png",
            "thumb": ""
        },
        "acf772b3-453a-463a-8ee8-b7e898056576": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 45,
                "speed": 35,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": true,
                "air": true
            },
            "id": "acf772b3-453a-463a-8ee8-b7e898056576",
            "cardId": "",
            "name": "Katharaz",
            "chaoticId": "34",
            "cardImage": "https://i.imgur.com/xhYoRkC.png",
            "thumb": "https://i.imgur.com/iW9dKkj.jpeg"
        },
        "1c492bea-96b5-4ce4-8770-50be14fed480": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 30,
                "speed": 70,
                "power": 70,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "1c492bea-96b5-4ce4-8770-50be14fed480",
            "cardId": "",
            "name": "Kileron, Warbeast of the Dust Storm",
            "chaoticId": "49",
            "cardImage": "https://i.imgur.com/Z5kK3LM.png",
            "thumb": ""
        },
        "4854811a-37bb-422f-ac31-5afa42988eac": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 30,
                "wisdom": 55,
                "speed": 80,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "4854811a-37bb-422f-ac31-5afa42988eac",
            "cardId": "",
            "name": "Klar'nok",
            "chaoticId": "61",
            "cardImage": "https://i.imgur.com/BGkL3f8.png",
            "thumb": ""
        },
        "0729d5aa-4afb-4146-be84-672ab882b48f": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 50,
                "power": 65,
                "energy": 45,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "0729d5aa-4afb-4146-be84-672ab882b48f",
            "cardId": "",
            "name": "Kraade",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/5tTrSHg.png",
            "thumb": ""
        },
        "d9bcadfb-63b0-4dcf-bd6e-8d1a4a25b238": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 15,
                "speed": 50,
                "power": 85,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "d9bcadfb-63b0-4dcf-bd6e-8d1a4a25b238",
            "cardId": "",
            "name": "Kreaal",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/6g56IRb.png",
            "thumb": ""
        },
        "80f66300-e889-41f9-88eb-ba4a37e4acdd": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 60,
                "speed": 40,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "80f66300-e889-41f9-88eb-ba4a37e4acdd",
            "cardId": "",
            "name": "Lendai",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/TJUefQJ.png",
            "thumb": "https://i.imgur.com/Rujl1gX.jpeg"
        },
        "213e2016-439c-46d0-814f-adef99913871": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 30,
                "speed": 55,
                "power": 80,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "213e2016-439c-46d0-814f-adef99913871",
            "cardId": "",
            "name": "Lyssta",
            "chaoticId": "23",
            "cardImage": "https://i.imgur.com/5CwBGbw.png",
            "thumb": ""
        },
        "4ced4bc5-0df3-496b-b43a-426fd73c3d87": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 25,
                "wisdom": 60,
                "speed": 25,
                "power": 30,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4ced4bc5-0df3-496b-b43a-426fd73c3d87",
            "cardId": "",
            "name": "Lystone",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/4BFIOoV.png",
            "thumb": ""
        },
        "8bd20cdc-5a30-4a4f-bab4-e3c10dc6c815": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 35,
                "speed": 100,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "8bd20cdc-5a30-4a4f-bab4-e3c10dc6c815",
            "cardId": "",
            "name": "Maliph, Guard of the Palace",
            "chaoticId": "50",
            "cardImage": "https://i.imgur.com/d1TCs2d.png",
            "thumb": ""
        },
        "99e310b3-600e-4a25-9e06-c9427f202d6e": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 35,
                "wisdom": 65,
                "speed": 30,
                "power": 85,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "99e310b3-600e-4a25-9e06-c9427f202d6e",
            "cardId": "",
            "name": "Milla'iin",
            "chaoticId": "62",
            "cardImage": "https://i.imgur.com/W5ovMPZ.png",
            "thumb": ""
        },
        "b234f91c-0b3b-4fef-b586-c0ea83a84c53": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 45,
                "speed": 40,
                "power": 30,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "b234f91c-0b3b-4fef-b586-c0ea83a84c53",
            "cardId": "",
            "name": "Mivindal",
            "chaoticId": "36",
            "cardImage": "https://i.imgur.com/p3dDRgd.png",
            "thumb": ""
        },
        "992f245c-440e-4ea7-b516-371190d92edf": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 55,
                "wisdom": 40,
                "speed": 65,
                "power": 45,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "992f245c-440e-4ea7-b516-371190d92edf",
            "cardId": "",
            "name": "Mizkio",
            "chaoticId": "51",
            "cardImage": "https://i.imgur.com/E0wARh5.png",
            "thumb": ""
        },
        "2c5e7572-9421-4bb7-a6a2-d81a48dd95be": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 80,
                "wisdom": 40,
                "speed": 65,
                "power": 100,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "2c5e7572-9421-4bb7-a6a2-d81a48dd95be",
            "cardId": "",
            "name": "Nauthilax, Tainted",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/SIw3OBJ.png",
            "thumb": ""
        },
        "1a76ca4a-7004-4a7e-9713-a570503b47f1": {
            "tribe": "Danian",
            "stats": {
                "courage": 100,
                "wisdom": 70,
                "speed": 35,
                "power": 25,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "1a76ca4a-7004-4a7e-9713-a570503b47f1",
            "cardId": "",
            "name": "Necrabe",
            "chaoticId": "37",
            "cardImage": "https://i.imgur.com/tqXhv0H.png",
            "thumb": ""
        },
        "e12a7513-3ebf-4fac-b460-4743744278c0": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 85,
                "wisdom": 45,
                "speed": 65,
                "power": 55,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "e12a7513-3ebf-4fac-b460-4743744278c0",
            "cardId": "",
            "name": "Neth'uar",
            "chaoticId": "63",
            "cardImage": "https://i.imgur.com/iQyTQ1E.png",
            "thumb": ""
        },
        "ab78619e-cffc-49d4-a958-e05263b88fb2": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 35,
                "speed": 50,
                "power": 45,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": true,
                "air": true
            },
            "id": "ab78619e-cffc-49d4-a958-e05263b88fb2",
            "cardId": "",
            "name": "Nimmei",
            "chaoticId": "38",
            "cardImage": "https://i.imgur.com/55ehnKa.png",
            "thumb": ""
        },
        "944c1f30-5e66-4c23-8948-f9609ed90805": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 75,
                "speed": 30,
                "power": 25,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "944c1f30-5e66-4c23-8948-f9609ed90805",
            "cardId": "",
            "name": "Okaxor",
            "chaoticId": "9",
            "cardImage": "https://i.imgur.com/Vs453Mx.png",
            "thumb": ""
        },
        "b10ddad1-ae0b-4369-9381-416eadd627ee": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 35,
                "speed": 40,
                "power": 70,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "b10ddad1-ae0b-4369-9381-416eadd627ee",
            "cardId": "",
            "name": "Ooloo",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/gu901mA.png",
            "thumb": ""
        },
        "631f2fd6-4299-4215-be6d-51f5d011dddf": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 45,
                "speed": 85,
                "power": 50,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "631f2fd6-4299-4215-be6d-51f5d011dddf",
            "cardId": "",
            "name": "Owayki",
            "chaoticId": "52",
            "cardImage": "https://i.imgur.com/wAcZ7ap.png",
            "thumb": ""
        },
        "0f7b50fb-f269-489f-acf8-7efeb04c6251": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 55,
                "wisdom": 40,
                "speed": 50,
                "power": 75,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "0f7b50fb-f269-489f-acf8-7efeb04c6251",
            "cardId": "",
            "name": "Ragetrod",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/JJ2j7VN.png",
            "thumb": ""
        },
        "710a6605-b770-4539-a73b-3cae21277028": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 30,
                "wisdom": 20,
                "speed": 85,
                "power": 90,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "710a6605-b770-4539-a73b-3cae21277028",
            "cardId": "",
            "name": "Rarran, Tainted",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/gQ4MX6d.png",
            "thumb": ""
        },
        "bcafc99f-8128-4f93-8424-587f80dadbad": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 60,
                "wisdom": 100,
                "speed": 40,
                "power": 20,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "bcafc99f-8128-4f93-8424-587f80dadbad",
            "cardId": "",
            "name": "Rath'tab",
            "chaoticId": "64",
            "cardImage": "https://i.imgur.com/HVqsI8w.png",
            "thumb": ""
        },
        "bb87dd04-cafb-49c8-a257-67f9c80e0213": {
            "tribe": "Danian",
            "stats": {
                "courage": 95,
                "wisdom": 65,
                "speed": 40,
                "power": 20,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "bb87dd04-cafb-49c8-a257-67f9c80e0213",
            "cardId": "",
            "name": "Rebant",
            "chaoticId": "39",
            "cardImage": "https://i.imgur.com/8olgM3R.png",
            "thumb": ""
        },
        "b055470a-bfbc-41b8-9a62-cfe2f4cada40": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 50,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "b055470a-bfbc-41b8-9a62-cfe2f4cada40",
            "cardId": "",
            "name": "Ritzu'dag",
            "chaoticId": "65",
            "cardImage": "https://i.imgur.com/KzgBVkQ.png",
            "thumb": ""
        },
        "17cc0aac-e0ca-4f5f-b1f2-267f87062e1c": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 25,
                "wisdom": 55,
                "speed": 60,
                "power": 30,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "17cc0aac-e0ca-4f5f-b1f2-267f87062e1c",
            "cardId": "",
            "name": "Savell",
            "chaoticId": "53",
            "cardImage": "https://i.imgur.com/oZpBY0Y.png",
            "thumb": ""
        },
        "439f0e5d-bf6e-447e-8852-e79eda7c4ff2": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 35,
                "speed": 80,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "439f0e5d-bf6e-447e-8852-e79eda7c4ff2",
            "cardId": "",
            "name": "Sirri",
            "chaoticId": "54",
            "cardImage": "https://i.imgur.com/mZfpE6V.png",
            "thumb": ""
        },
        "74ee39a1-812f-45e7-87a8-3de08a59fecb": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 40,
                "speed": 60,
                "power": 30,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": true
            },
            "id": "74ee39a1-812f-45e7-87a8-3de08a59fecb",
            "cardId": "",
            "name": "Tabaal",
            "chaoticId": "40",
            "cardImage": "https://i.imgur.com/g69IRtb.png",
            "thumb": ""
        },
        "baa81746-57eb-4e5c-8698-f8f480fdd9b2": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 85,
                "speed": 35,
                "power": 75,
                "energy": 65,
                "fire": true,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "baa81746-57eb-4e5c-8698-f8f480fdd9b2",
            "cardId": "",
            "name": "Tangath Toborn, In Training",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/qRdEubF.png",
            "thumb": ""
        },
        "05c1485c-28a6-48ab-89c9-f61a495ebe4b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 65,
                "speed": 50,
                "power": 55,
                "energy": 45,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "05c1485c-28a6-48ab-89c9-f61a495ebe4b",
            "cardId": "",
            "name": "Targubaj",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/IxZQ21R.png",
            "thumb": ""
        },
        "e85c9d07-f093-4976-b332-9c9736f3df33": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 100,
                "wisdom": 100,
                "speed": 60,
                "power": 40,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "e85c9d07-f093-4976-b332-9c9736f3df33",
            "cardId": "",
            "name": "Tartarek, Psi Overloader",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/bGiwkXW.png",
            "thumb": ""
        },
        "c7ab12d6-e342-4cb6-8d0e-ee0d6433ef9d": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 20,
                "speed": 60,
                "power": 60,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "c7ab12d6-e342-4cb6-8d0e-ee0d6433ef9d",
            "cardId": "",
            "name": "Tinnoi",
            "chaoticId": "55",
            "cardImage": "https://i.imgur.com/HW2JgUI.png",
            "thumb": ""
        },
        "f527b3b1-7b57-46da-85d3-5b46a19065f6": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 35,
                "wisdom": 60,
                "speed": 25,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "f527b3b1-7b57-46da-85d3-5b46a19065f6",
            "cardId": "",
            "name": "Tomugar",
            "chaoticId": "28",
            "cardImage": "https://i.imgur.com/CgPdNOY.png",
            "thumb": ""
        },
        "b157f233-fc76-42b4-b64c-75654bdca8b1": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 80,
                "speed": 40,
                "power": 50,
                "energy": 45,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "b157f233-fc76-42b4-b64c-75654bdca8b1",
            "cardId": "",
            "name": "Trimdaal",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/EQEta5E.png",
            "thumb": ""
        },
        "44d1e021-7c0d-4af1-871c-3e0512db5b59": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 40,
                "speed": 55,
                "power": 50,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "44d1e021-7c0d-4af1-871c-3e0512db5b59",
            "cardId": "",
            "name": "Uholdan",
            "chaoticId": "41",
            "cardImage": "https://i.imgur.com/yNkjU0E.png",
            "thumb": ""
        },
        "40795039-d69b-495a-9c8b-8d50f1223dd1": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 40,
                "speed": 60,
                "power": 50,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": false,
                "air": true
            },
            "id": "40795039-d69b-495a-9c8b-8d50f1223dd1",
            "cardId": "",
            "name": "Ulmquad",
            "chaoticId": "42",
            "cardImage": "https://i.imgur.com/FXEVowd.png",
            "thumb": ""
        },
        "a818355f-6fe1-46e9-b5a4-fcbafc401e8b": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 30,
                "wisdom": 45,
                "speed": 50,
                "power": 45,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a818355f-6fe1-46e9-b5a4-fcbafc401e8b",
            "cardId": "",
            "name": "Wistanne",
            "chaoticId": "56",
            "cardImage": "https://i.imgur.com/6625AaR.png",
            "thumb": ""
        },
        "eb3e33f6-918e-410c-9bfa-91e053c53cf0": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 30,
                "wisdom": 45,
                "speed": 40,
                "power": 25,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "eb3e33f6-918e-410c-9bfa-91e053c53cf0",
            "cardId": "",
            "name": "Wrenges",
            "chaoticId": "14",
            "cardImage": "https://i.imgur.com/vsROvYm.png",
            "thumb": ""
        },
        "9f952858-0d57-4b99-b52d-078d5fc00065": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 60,
                "wisdom": 70,
                "speed": 50,
                "power": 50,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "9f952858-0d57-4b99-b52d-078d5fc00065",
            "cardId": "",
            "name": "Xis'torq",
            "chaoticId": "66",
            "cardImage": "https://i.imgur.com/U762MkS.png",
            "thumb": ""
        },
        "4f9570a5-3680-4a34-ac8c-889f775a7bbc": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 50,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "4f9570a5-3680-4a34-ac8c-889f775a7bbc",
            "cardId": "",
            "name": "Aa'une the Oligarch, Projection",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/CqkZW2b.png",
            "thumb": ""
        },
        "53b75a9c-0860-40d7-b47a-07b51a30220d": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 200,
                "wisdom": 200,
                "speed": 200,
                "power": 200,
                "energy": 100,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "53b75a9c-0860-40d7-b47a-07b51a30220d",
            "cardId": "",
            "name": "Aa'une the Oligarch, Avatar",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/ZcfkmGv.png",
            "thumb": "https://i.imgur.com/GanWBRr.jpeg"
        },
        "8ce4b7e9-0b3d-4681-ab32-55833b14b23d": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 45,
                "wisdom": 50,
                "speed": 65,
                "power": 60,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "8ce4b7e9-0b3d-4681-ab32-55833b14b23d",
            "cardId": "",
            "name": "Aer'dak",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/pKvs9Vm.png",
            "thumb": ""
        },
        "35b35560-908a-4e5c-bc64-ff10903daa3c": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 40,
                "speed": 55,
                "power": 50,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "35b35560-908a-4e5c-bc64-ff10903daa3c",
            "cardId": "",
            "name": "Agrino Jaldar",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/v4g8kCS.png",
            "thumb": "https://i.imgur.com/pDyonRf.jpeg"
        },
        "3d212c37-48b3-47d1-acf8-3914a0566e31": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 80,
                "wisdom": 90,
                "speed": 40,
                "power": 50,
                "energy": 70,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "3d212c37-48b3-47d1-acf8-3914a0566e31",
            "cardId": "",
            "name": "Aivenna",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/1HgbOS2.png",
            "thumb": ""
        },
        "93c3285e-d696-4ecf-af00-8da2815d2ad9": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 35,
                "wisdom": 65,
                "speed": 35,
                "power": 55,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "93c3285e-d696-4ecf-af00-8da2815d2ad9",
            "cardId": "",
            "name": "Anger'keem",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/f862q25.png",
            "thumb": ""
        },
        "f51bb79b-7a95-4817-b54a-688cd8146499": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 60,
                "speed": 35,
                "power": 45,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "f51bb79b-7a95-4817-b54a-688cd8146499",
            "cardId": "",
            "name": "Appelai",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/vHZEvS1.png",
            "thumb": ""
        },
        "ad3e209e-0b70-4008-98d0-077c9480fe4f": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 65,
                "wisdom": 65,
                "speed": 60,
                "power": 50,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ad3e209e-0b70-4008-98d0-077c9480fe4f",
            "cardId": "",
            "name": "Arrthoa",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/7e7Ea1C.png",
            "thumb": ""
        },
        "728d8032-a408-4695-8d7f-8ab1582d3be2": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 55,
                "speed": 100,
                "power": 35,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "728d8032-a408-4695-8d7f-8ab1582d3be2",
            "cardId": "",
            "name": "Attacat, Tactical Aide",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/4gjKQ8W.png",
            "thumb": ""
        },
        "445e9675-6bc1-4d51-9b08-8f7e610474d5": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 40,
                "speed": 55,
                "power": 50,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "445e9675-6bc1-4d51-9b08-8f7e610474d5",
            "cardId": "",
            "name": "Aureban",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/8ZZqAKk.png",
            "thumb": ""
        },
        "250d284c-5cc5-48da-aa06-4f1fd9c8ba9f": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 60,
                "wisdom": 60,
                "speed": 50,
                "power": 75,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "250d284c-5cc5-48da-aa06-4f1fd9c8ba9f",
            "cardId": "",
            "name": "Bahrakatan, The Coralsmith",
            "chaoticId": "32",
            "cardImage": "https://i.imgur.com/kLdyJ3r.png",
            "thumb": ""
        },
        "d9c29c7a-614a-4bfc-a42b-7e57ec7001b8": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 75,
                "speed": 40,
                "power": 45,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": true
            },
            "id": "d9c29c7a-614a-4bfc-a42b-7e57ec7001b8",
            "cardId": "",
            "name": "Biakan",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/L5bP0zb.png",
            "thumb": ""
        },
        "bbb21265-f40e-47d8-a21c-83bed899f215": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 30,
                "wisdom": 70,
                "speed": 45,
                "power": 35,
                "energy": 25,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "bbb21265-f40e-47d8-a21c-83bed899f215",
            "cardId": "",
            "name": "Blaaxa",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/YeQKXOh.png",
            "thumb": ""
        },
        "95fa2bbf-d82f-40e4-862b-acd499b192cb": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 60,
                "speed": 30,
                "power": 45,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "95fa2bbf-d82f-40e4-862b-acd499b192cb",
            "cardId": "",
            "name": "Dhilas",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/2uTbIb0.png",
            "thumb": ""
        },
        "4dcae085-5da0-4ee7-9c24-7c1d2453e887": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 40,
                "wisdom": 30,
                "speed": 20,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "4dcae085-5da0-4ee7-9c24-7c1d2453e887",
            "cardId": "",
            "name": "Dror'niq",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/urfWlNX.png",
            "thumb": ""
        },
        "83f1aad0-5ded-4e60-ada4-74a3064f0fbd": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 70,
                "wisdom": 45,
                "speed": 95,
                "power": 30,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "83f1aad0-5ded-4e60-ada4-74a3064f0fbd",
            "cardId": "",
            "name": "Epitrinne",
            "chaoticId": "23",
            "cardImage": "https://i.imgur.com/c01dyKl.png",
            "thumb": ""
        },
        "5e0764aa-60b1-4363-bdc8-566672bd3af4": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 40,
                "wisdom": 90,
                "speed": 60,
                "power": 55,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "5e0764aa-60b1-4363-bdc8-566672bd3af4",
            "cardId": "",
            "name": "Fal'makin",
            "chaoticId": "34",
            "cardImage": "https://i.imgur.com/VtU7m3j.png",
            "thumb": ""
        },
        "49a0c7b1-4224-46ca-9253-e2d979c37108": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 65,
                "wisdom": 45,
                "speed": 55,
                "power": 25,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "49a0c7b1-4224-46ca-9253-e2d979c37108",
            "cardId": "",
            "name": "Fla'gamp",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/BZulcZH.png",
            "thumb": ""
        },
        "df84b73f-51ef-4634-a650-5f87dc6e45f7": {
            "tribe": "Danian",
            "stats": {
                "courage": 85,
                "wisdom": 75,
                "speed": 35,
                "power": 45,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "df84b73f-51ef-4634-a650-5f87dc6e45f7",
            "cardId": "",
            "name": "Fliandar",
            "chaoticId": "18",
            "cardImage": "https://i.imgur.com/fk1bkJw.png",
            "thumb": "https://i.imgur.com/0k245hz.jpeg"
        },
        "26b7c044-c6e5-4b55-803f-5dba063b135b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 85,
                "speed": 35,
                "power": 40,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "26b7c044-c6e5-4b55-803f-5dba063b135b",
            "cardId": "",
            "name": "Gimwei",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/wh2OHfK.jpg",
            "thumb": ""
        },
        "1ee736ae-5569-4718-80f2-69bec905cfe7": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 75,
                "wisdom": 30,
                "speed": 75,
                "power": 50,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "1ee736ae-5569-4718-80f2-69bec905cfe7",
            "cardId": "",
            "name": "Glost",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/pBpdLCV.png",
            "thumb": "https://i.imgur.com/aCNYl8v.jpeg"
        },
        "d96de0be-e93b-49d2-9b4f-1b6127e426a9": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 40,
                "speed": 50,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d96de0be-e93b-49d2-9b4f-1b6127e426a9",
            "cardId": "",
            "name": "H'earring, Tainted",
            "chaoticId": "9",
            "cardImage": "https://i.imgur.com/u7LBiio.png",
            "thumb": ""
        },
        "4504eda0-e576-4aca-a0f5-66fc4cab2de4": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 55,
                "wisdom": 45,
                "speed": 100,
                "power": 75,
                "energy": 65,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "4504eda0-e576-4aca-a0f5-66fc4cab2de4",
            "cardId": "",
            "name": "Headmaster Ankhyja",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/knHzXN6.png",
            "thumb": "https://i.imgur.com/3HJkHt4.jpeg"
        },
        "f8ee23a4-1054-451a-86a5-e5a55b5bd597": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 75,
                "wisdom": 110,
                "speed": 15,
                "power": 15,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "f8ee23a4-1054-451a-86a5-e5a55b5bd597",
            "cardId": "",
            "name": "Hune Paltanin",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/P9aS3lc.png",
            "thumb": ""
        },
        "4184d119-b0ef-40c1-ab2c-2b59cfa389d3": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 40,
                "wisdom": 90,
                "speed": 50,
                "power": 40,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "4184d119-b0ef-40c1-ab2c-2b59cfa389d3",
            "cardId": "",
            "name": "Ikub'ra",
            "chaoticId": "36",
            "cardImage": "https://i.imgur.com/P1glYxm.png",
            "thumb": ""
        },
        "8c991edf-d010-4eb6-a1f0-2aef67a2ef6b": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 45,
                "wisdom": 90,
                "speed": 95,
                "power": 25,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "8c991edf-d010-4eb6-a1f0-2aef67a2ef6b",
            "cardId": "",
            "name": "Jus'hebban",
            "chaoticId": "37",
            "cardImage": "https://i.imgur.com/dOJx7n9.png",
            "thumb": ""
        },
        "7f0bee5a-8659-4ff8-bab7-38d10d577c25": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 70,
                "speed": 20,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "7f0bee5a-8659-4ff8-bab7-38d10d577c25",
            "cardId": "",
            "name": "Khybon, The Renegade",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/4uIfiCk.png",
            "thumb": ""
        },
        "2f2ae5f0-4039-470c-a15a-68613e318795": {
            "tribe": "Danian",
            "stats": {
                "courage": 45,
                "wisdom": 50,
                "speed": 85,
                "power": 55,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": false,
                "air": true
            },
            "id": "2f2ae5f0-4039-470c-a15a-68613e318795",
            "cardId": "",
            "name": "Klencka",
            "chaoticId": "19",
            "cardImage": "https://i.imgur.com/wXUfW6O.png",
            "thumb": ""
        },
        "bed5421c-ac12-4eb9-b69c-5086f370249e": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 25,
                "wisdom": 55,
                "speed": 25,
                "power": 50,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": false,
                "air": true
            },
            "id": "bed5421c-ac12-4eb9-b69c-5086f370249e",
            "cardId": "",
            "name": "Lam'inkal",
            "chaoticId": "38",
            "cardImage": "https://i.imgur.com/9JRWQkd.png",
            "thumb": ""
        },
        "503683a7-4a4a-4463-a4f7-f9853495c946": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 40,
                "wisdom": 50,
                "speed": 40,
                "power": 90,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "503683a7-4a4a-4463-a4f7-f9853495c946",
            "cardId": "",
            "name": "Mik'banin",
            "chaoticId": "39",
            "cardImage": "https://i.imgur.com/UEm0prz.png",
            "thumb": ""
        },
        "e87a1339-608a-44f6-9620-a2642d5f89bb": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 45,
                "wisdom": 50,
                "speed": 35,
                "power": 40,
                "energy": 35,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "e87a1339-608a-44f6-9620-a2642d5f89bb",
            "cardId": "",
            "name": "Mock'adyn",
            "chaoticId": "40",
            "cardImage": "https://i.imgur.com/0JpEO9R.png",
            "thumb": ""
        },
        "d63d7f8e-7218-4821-86f6-796e6371b4f1": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 30,
                "wisdom": 70,
                "speed": 45,
                "power": 35,
                "energy": 25,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d63d7f8e-7218-4821-86f6-796e6371b4f1",
            "cardId": "",
            "name": "Najarin, Fluidmorphers' Foe",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/Ll3D5iz.png",
            "thumb": ""
        },
        "cd019989-374c-4f7f-b1d3-0863e2232bd0": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 90,
                "speed": 60,
                "power": 50,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "cd019989-374c-4f7f-b1d3-0863e2232bd0",
            "cardId": "",
            "name": "Nivenna",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/uIEp1g9.png",
            "thumb": ""
        },
        "bfb12957-140e-4e95-9c86-6f11b2877406": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 70,
                "speed": 45,
                "power": 70,
                "energy": 60,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "bfb12957-140e-4e95-9c86-6f11b2877406",
            "cardId": "",
            "name": "Nunk'worn",
            "chaoticId": "41",
            "cardImage": "https://i.imgur.com/opuuoAp.png",
            "thumb": ""
        },
        "95c4350c-50bd-404e-9b27-433373f6260f": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 35,
                "wisdom": 55,
                "speed": 65,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "95c4350c-50bd-404e-9b27-433373f6260f",
            "cardId": "",
            "name": "Otinee",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/45fhWcR.png",
            "thumb": ""
        },
        "d1964cea-18b4-42ad-bfca-45a4f11ce1f2": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 35,
                "wisdom": 60,
                "speed": 55,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "d1964cea-18b4-42ad-bfca-45a4f11ce1f2",
            "cardId": "",
            "name": "Phelphor, Of the Deep",
            "chaoticId": "42",
            "cardImage": "https://i.imgur.com/7Kgh3tr.png",
            "thumb": ""
        },
        "9dd21b4e-057c-4a62-a69d-d4d3e0d04749": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 45,
                "wisdom": 50,
                "speed": 85,
                "power": 55,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "9dd21b4e-057c-4a62-a69d-d4d3e0d04749",
            "cardId": "",
            "name": "Rasbma Darini",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/6mCXflg.png",
            "thumb": ""
        },
        "86ddf765-87dc-463e-bd3b-c56d478775e4": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 45,
                "speed": 40,
                "power": 60,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "86ddf765-87dc-463e-bd3b-c56d478775e4",
            "cardId": "",
            "name": "Ri'oha",
            "chaoticId": "43",
            "cardImage": "https://i.imgur.com/0GALD80.png",
            "thumb": ""
        },
        "391fecf4-2ece-4850-9186-14f800669c18": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 90,
                "wisdom": 40,
                "speed": 40,
                "power": 50,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "391fecf4-2ece-4850-9186-14f800669c18",
            "cardId": "",
            "name": "Rol'doi",
            "chaoticId": "44",
            "cardImage": "https://i.imgur.com/VtSAcY3.png",
            "thumb": ""
        },
        "6a103b13-b010-47ea-bbc8-99f0c5129778": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 45,
                "wisdom": 75,
                "speed": 20,
                "power": 20,
                "energy": 25,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "6a103b13-b010-47ea-bbc8-99f0c5129778",
            "cardId": "",
            "name": "Siril'ean, The Songthief",
            "chaoticId": "45",
            "cardImage": "https://i.imgur.com/sz80A5I.png",
            "thumb": ""
        },
        "03a43d3e-7c7a-4d88-8aa4-84407f8a6f1f": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 65,
                "speed": 65,
                "power": 65,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "03a43d3e-7c7a-4d88-8aa4-84407f8a6f1f",
            "cardId": "",
            "name": "Stelgar",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/is2VQ7t.png",
            "thumb": ""
        },
        "f308723d-d84f-4fbf-996f-238b94a65928": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 60,
                "speed": 65,
                "power": 50,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "f308723d-d84f-4fbf-996f-238b94a65928",
            "cardId": "",
            "name": "Taffial",
            "chaoticId": "28",
            "cardImage": "https://i.imgur.com/3vV0DQ5.png",
            "thumb": "https://i.imgur.com/10JErUr.jpeg"
        },
        "14d1d323-c639-4a0a-8c3a-ebda9503b646": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 70,
                "power": 90,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "14d1d323-c639-4a0a-8c3a-ebda9503b646",
            "cardId": "",
            "name": "Takinom, The Shadowknight",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/Kq4EqQo.png",
            "thumb": ""
        },
        "8a83ef3d-434c-4f70-a5e3-d85b499fe51c": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 45,
                "speed": 40,
                "power": 35,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "8a83ef3d-434c-4f70-a5e3-d85b499fe51c",
            "cardId": "",
            "name": "Tarbok",
            "chaoticId": "20",
            "cardImage": "https://i.imgur.com/j0pkmXM.png",
            "thumb": ""
        },
        "0a9033ae-60c3-48f8-90fb-6f61d56f822e": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 35,
                "wisdom": 50,
                "speed": 35,
                "power": 55,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "0a9033ae-60c3-48f8-90fb-6f61d56f822e",
            "cardId": "",
            "name": "Tasqa",
            "chaoticId": "14",
            "cardImage": "https://i.imgur.com/I4MKAeR.png",
            "thumb": ""
        },
        "767dede3-1411-4664-a30a-d7a84cbd47c0": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 90,
                "power": 40,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "767dede3-1411-4664-a30a-d7a84cbd47c0",
            "cardId": "",
            "name": "Vitar'zu",
            "chaoticId": "46",
            "cardImage": "https://i.imgur.com/p560X3V.png",
            "thumb": ""
        },
        "aa84d957-341a-49ea-97ee-c42019ed065d": {
            "tribe": "Danian",
            "stats": {
                "courage": 55,
                "wisdom": 65,
                "speed": 35,
                "power": 45,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "aa84d957-341a-49ea-97ee-c42019ed065d",
            "cardId": "",
            "name": "Wamma, Hive Ordnance",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/TuX8zc8.png",
            "thumb": ""
        },
        "263773c8-0097-436e-a6d9-7d7a71de8ca6": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 95,
                "wisdom": 75,
                "speed": 25,
                "power": 40,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "263773c8-0097-436e-a6d9-7d7a71de8ca6",
            "cardId": "",
            "name": "Agitos, Eloquent Motivator",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/LmsCPhV.png",
            "thumb": ""
        },
        "01e1b474-b5f4-4894-abbf-aa1b370a1bf1": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 60,
                "speed": 75,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "01e1b474-b5f4-4894-abbf-aa1b370a1bf1",
            "cardId": "",
            "name": "Ailav",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/21BR964.png",
            "thumb": ""
        },
        "2efad44c-22e9-4eff-82c5-97135e8e9b53": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 35,
                "wisdom": 40,
                "speed": 65,
                "power": 70,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "2efad44c-22e9-4eff-82c5-97135e8e9b53",
            "cardId": "",
            "name": "Aval'par",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/BWSJ0ra.png",
            "thumb": ""
        },
        "235cc5fb-ea34-440d-9eb8-751e920cd783": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 65,
                "speed": 35,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "235cc5fb-ea34-440d-9eb8-751e920cd783",
            "cardId": "",
            "name": "Drabe",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/hGZqZvl.png",
            "thumb": ""
        },
        "6c1cfd68-16dc-4f1b-a4bc-b437ef4db017": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 55,
                "wisdom": 25,
                "speed": 35,
                "power": 65,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "6c1cfd68-16dc-4f1b-a4bc-b437ef4db017",
            "cardId": "",
            "name": "Dreg'ora",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/L0eUCHx.png",
            "thumb": ""
        },
        "a4663736-cae1-44e6-ae4c-989b2f463806": {
            "tribe": "Danian",
            "stats": {
                "courage": 100,
                "wisdom": 75,
                "speed": 80,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "a4663736-cae1-44e6-ae4c-989b2f463806",
            "cardId": "",
            "name": "Elhadd",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/ME027KN.png",
            "thumb": "https://i.imgur.com/1EAJRtL.jpeg"
        },
        "12fd721b-fa54-4f0d-baa9-a2f23527220a": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 85,
                "wisdom": 30,
                "speed": 45,
                "power": 70,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "12fd721b-fa54-4f0d-baa9-a2f23527220a",
            "cardId": "",
            "name": "Emna'ool",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/KzpYZAw.png",
            "thumb": ""
        },
        "4c0bd932-0031-4752-ba07-d90c6f6afabd": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 30,
                "speed": 15,
                "power": 70,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "4c0bd932-0031-4752-ba07-d90c6f6afabd",
            "cardId": "",
            "name": "Eximiar",
            "chaoticId": "9",
            "cardImage": "https://i.imgur.com/s58G3ug.png",
            "thumb": ""
        },
        "609eeac9-dfb0-4e31-b4c8-7feb63d05470": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 100,
                "speed": 50,
                "power": 100,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "609eeac9-dfb0-4e31-b4c8-7feb63d05470",
            "cardId": "",
            "name": "Gaffat-ra",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/31W0Ch2.png",
            "thumb": ""
        },
        "8329fc5f-ea96-4c5d-8336-6b7487bc579b": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 65,
                "wisdom": 35,
                "speed": 40,
                "power": 85,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "8329fc5f-ea96-4c5d-8336-6b7487bc579b",
            "cardId": "",
            "name": "Gal'drad",
            "chaoticId": "32",
            "cardImage": "https://i.imgur.com/bV5RpYD.png",
            "thumb": ""
        },
        "d2c600ff-3293-4bcd-893f-2ef266ad10c7": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 60,
                "speed": 35,
                "power": 100,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "d2c600ff-3293-4bcd-893f-2ef266ad10c7",
            "cardId": "",
            "name": "Galmedar",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/JsLe5LP.png",
            "thumb": ""
        },
        "54edc786-cc82-41f7-8edb-852378e374c7": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 55,
                "speed": 40,
                "power": 35,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "54edc786-cc82-41f7-8edb-852378e374c7",
            "cardId": "",
            "name": "Hiadrom",
            "chaoticId": "23",
            "cardImage": "https://i.imgur.com/mOe6ccb.png",
            "thumb": ""
        },
        "5964d760-cb4e-4168-85b7-d934bc8a812b": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 30,
                "wisdom": 50,
                "speed": 75,
                "power": 20,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "5964d760-cb4e-4168-85b7-d934bc8a812b",
            "cardId": "",
            "name": "Iflar, The Crown Prince",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/RjDdmvl.png",
            "thumb": "https://i.imgur.com/ifZyRbF.jpeg"
        },
        "8d1d36d4-956a-415a-98d1-754c2ea48421": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 95,
                "wisdom": 90,
                "speed": 70,
                "power": 65,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "8d1d36d4-956a-415a-98d1-754c2ea48421",
            "cardId": "",
            "name": "Intress, Natureforce",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/zDFHl74.png",
            "thumb": ""
        },
        "8072e627-94ec-4598-8955-7bbe032c7948": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 65,
                "speed": 75,
                "power": 50,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "8072e627-94ec-4598-8955-7bbe032c7948",
            "cardId": "",
            "name": "Ivelaan",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/cu1eUNN.png",
            "thumb": ""
        },
        "64c73d33-42c0-473c-bd4c-d71f2bf3af1c": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 70,
                "speed": 30,
                "power": 45,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "64c73d33-42c0-473c-bd4c-d71f2bf3af1c",
            "cardId": "",
            "name": "Jaidwarl",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/mcUxanL.png",
            "thumb": ""
        },
        "6cfa5897-79b3-43d1-94e8-8cd94445c527": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 60,
                "wisdom": 50,
                "speed": 40,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "6cfa5897-79b3-43d1-94e8-8cd94445c527",
            "cardId": "",
            "name": "Ki'bro",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/wlVxROs.png",
            "thumb": ""
        },
        "a0f4a09a-ce2c-4ad6-ac4e-061785c07178": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 15,
                "wisdom": 15,
                "speed": 60,
                "power": 95,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a0f4a09a-ce2c-4ad6-ac4e-061785c07178",
            "cardId": "",
            "name": "Klawam",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/YP2ZZ6K.png",
            "thumb": ""
        },
        "a7721794-d11f-413a-8bfc-ea77c9a15140": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 75,
                "speed": 55,
                "power": 50,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "a7721794-d11f-413a-8bfc-ea77c9a15140",
            "cardId": "",
            "name": "Lord Van Bloot, Servant of Aa'une",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/l4xOMtx.png",
            "thumb": ""
        },
        "271e7ea0-9b31-4982-b4ba-0d1d6adba0f7": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 50,
                "speed": 75,
                "power": 90,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "271e7ea0-9b31-4982-b4ba-0d1d6adba0f7",
            "cardId": "",
            "name": "Makanaz",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/6MKY8HV.png",
            "thumb": "https://i.imgur.com/RRttyff.jpeg"
        },
        "37d95dde-f198-49d7-b6fd-025a925d09f3": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 30,
                "wisdom": 55,
                "speed": 30,
                "power": 20,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "37d95dde-f198-49d7-b6fd-025a925d09f3",
            "cardId": "",
            "name": "Na-inna, Rebel of the Rao'Pa Sahkk",
            "chaoticId": "18",
            "cardImage": "https://i.imgur.com/TbNIyQx.png",
            "thumb": ""
        },
        "237a9564-aa86-4f59-9d44-8760aa1757e4": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 90,
                "speed": 35,
                "power": 40,
                "energy": 65,
                "fire": false,
                "water": true,
                "earth": false,
                "air": true
            },
            "id": "237a9564-aa86-4f59-9d44-8760aa1757e4",
            "cardId": "",
            "name": "Neekwin",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/c0Sg3uh.png",
            "thumb": ""
        },
        "90ddb5a6-72a6-462d-80f3-1fce27bbe4e1": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 90,
                "wisdom": 35,
                "speed": 95,
                "power": 40,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "90ddb5a6-72a6-462d-80f3-1fce27bbe4e1",
            "cardId": "",
            "name": "Noaz, Mipedian Cavalerist",
            "chaoticId": "19",
            "cardImage": "https://i.imgur.com/ptuuYim.png",
            "thumb": "https://i.imgur.com/wUBLxsJ.jpeg"
        },
        "1e57e4a8-7dda-4a7a-9766-57242069fe35": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 65,
                "wisdom": 40,
                "speed": 35,
                "power": 50,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "1e57e4a8-7dda-4a7a-9766-57242069fe35",
            "cardId": "",
            "name": "Olkiex, Driver Extraordinaire",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/onIkAV3.png",
            "thumb": ""
        },
        "c86edcb1-be19-46cb-accf-673272c1c15d": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 85,
                "wisdom": 40,
                "speed": 20,
                "power": 100,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "c86edcb1-be19-46cb-accf-673272c1c15d",
            "cardId": "",
            "name": "Ørth, The Empowerer",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/neCuz3d.png",
            "thumb": ""
        },
        "efb8f0f7-21f2-4ffd-9c21-a3d6fc993c92": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 70,
                "wisdom": 30,
                "speed": 85,
                "power": 40,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "efb8f0f7-21f2-4ffd-9c21-a3d6fc993c92",
            "cardId": "",
            "name": "Ozlai, Chaor's Pilot",
            "chaoticId": "34",
            "cardImage": "https://i.imgur.com/1iAm8g3.png",
            "thumb": ""
        },
        "0ff8e645-d8b8-43d8-a3fc-2c1b098d1638": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 30,
                "wisdom": 80,
                "speed": 40,
                "power": 35,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "0ff8e645-d8b8-43d8-a3fc-2c1b098d1638",
            "cardId": "",
            "name": "Part'soa",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/O77FWYf.png",
            "thumb": ""
        },
        "1faa97bc-156a-45a7-8c1a-fdf455b25685": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 85,
                "wisdom": 55,
                "speed": 25,
                "power": 75,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "1faa97bc-156a-45a7-8c1a-fdf455b25685",
            "cardId": "",
            "name": "Rellim, Watermaster",
            "chaoticId": "20",
            "cardImage": "https://i.imgur.com/GVa6hgS.png",
            "thumb": ""
        },
        "fa280ef8-255c-4253-95b7-ecc01dc1c59e": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 30,
                "wisdom": 55,
                "speed": 85,
                "power": 45,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "fa280ef8-255c-4253-95b7-ecc01dc1c59e",
            "cardId": "",
            "name": "Ruhban",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/9y8BKlT.png",
            "thumb": ""
        },
        "0fd64d2f-b94e-4c33-a3f6-0c0399d98452": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 45,
                "speed": 30,
                "power": 45,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "0fd64d2f-b94e-4c33-a3f6-0c0399d98452",
            "cardId": "",
            "name": "Topar",
            "chaoticId": "14",
            "cardImage": "https://i.imgur.com/YAlGbte.png",
            "thumb": ""
        },
        "62315559-74f2-468b-8898-ecff98117f07": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 35,
                "wisdom": 20,
                "speed": 60,
                "power": 85,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "62315559-74f2-468b-8898-ecff98117f07",
            "cardId": "",
            "name": "Ustabe",
            "chaoticId": "28",
            "cardImage": "https://i.imgur.com/boNZn4i.png",
            "thumb": ""
        },
        "239a5997-1d22-4683-8b51-c45537336bde": {
            "tribe": "Danian",
            "stats": {
                "courage": 45,
                "wisdom": 70,
                "speed": 40,
                "power": 35,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "239a5997-1d22-4683-8b51-c45537336bde",
            "cardId": "",
            "name": "Vilrik Landfarer",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/cnNKWmf.png",
            "thumb": ""
        },
        "d24227f5-d2a9-40c6-81a9-12d7300c4fa0": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 35,
                "wisdom": 65,
                "speed": 35,
                "power": 40,
                "energy": 35,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "d24227f5-d2a9-40c6-81a9-12d7300c4fa0",
            "cardId": "",
            "name": "Vix'ben",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/k2Yfepk.png",
            "thumb": ""
        },
        "1683b5d0-e745-4232-ac5e-8e3a5b1306a9": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 80,
                "speed": 70,
                "power": 30,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "1683b5d0-e745-4232-ac5e-8e3a5b1306a9",
            "cardId": "",
            "name": "Xaerv, Monsoon Defender",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/5t9eeNe.png",
            "thumb": ""
        },
        "f380d15f-d489-49fd-bf24-6b54ab002aaa": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 80,
                "wisdom": 40,
                "speed": 50,
                "power": 60,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "f380d15f-d489-49fd-bf24-6b54ab002aaa",
            "cardId": "",
            "name": "Yterio",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/4m55U1K.png",
            "thumb": ""
        },
        "a30841c6-56a9-4b9c-99b3-19a6a15b1f5a": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 90,
                "speed": 35,
                "power": 65,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a30841c6-56a9-4b9c-99b3-19a6a15b1f5a",
            "cardId": "",
            "name": "Aivenna, OverWorld Lieutenant",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/r48a976.png",
            "thumb": ""
        },
        "12df798c-5f34-4403-82d2-fcb8d9b5dd59": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 55,
                "wisdom": 70,
                "speed": 35,
                "power": 20,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "12df798c-5f34-4403-82d2-fcb8d9b5dd59",
            "cardId": "",
            "name": "Akkalbi",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/ZoWjno8.png",
            "thumb": ""
        },
        "8de57d39-819f-4317-b7fd-14f5b2a2b06b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 75,
                "speed": 55,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "8de57d39-819f-4317-b7fd-14f5b2a2b06b",
            "cardId": "",
            "name": "Akkerbal",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/mThsHmb.png",
            "thumb": ""
        },
        "81cd8198-b500-4b87-80cb-5f8e160d1bdb": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 30,
                "speed": 40,
                "power": 85,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "81cd8198-b500-4b87-80cb-5f8e160d1bdb",
            "cardId": "",
            "name": "Anarkiar",
            "chaoticId": "9",
            "cardImage": "https://i.imgur.com/Ag3hFRR.png",
            "thumb": ""
        },
        "49ba6d26-944b-4fa8-acad-4416c17f4d26": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 20,
                "speed": 75,
                "power": 90,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "49ba6d26-944b-4fa8-acad-4416c17f4d26",
            "cardId": "",
            "name": "Barath Beyond, UnderWorld General",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/UULjTsv.png",
            "thumb": ""
        },
        "6fb8866f-dad6-48e9-bdf7-eaa819de718e": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 75,
                "speed": 45,
                "power": 40,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "6fb8866f-dad6-48e9-bdf7-eaa819de718e",
            "cardId": "",
            "name": "Blügon, Winter Warrior",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/1Uwhlhj.png",
            "thumb": ""
        },
        "16e487b5-d69e-4192-880c-d4ed4fe5ac42": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 55,
                "wisdom": 85,
                "speed": 40,
                "power": 50,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "16e487b5-d69e-4192-880c-d4ed4fe5ac42",
            "cardId": "",
            "name": "Bo'aam",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/s0ag8Os.png",
            "thumb": ""
        },
        "e99656a6-c8eb-4ddb-92f2-8e1ed88e669f": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 80,
                "wisdom": 45,
                "speed": 45,
                "power": 105,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e99656a6-c8eb-4ddb-92f2-8e1ed88e669f",
            "cardId": "",
            "name": "Chaor, The Fierce",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/wrcIcTs.png",
            "thumb": ""
        },
        "4d5caa10-2753-4841-8d7e-1e6e61c558dc": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 65,
                "speed": 85,
                "power": 35,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "4d5caa10-2753-4841-8d7e-1e6e61c558dc",
            "cardId": "",
            "name": "Ebbikka",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/Ft3jStw.png",
            "thumb": ""
        },
        "f7cf928c-43ac-476a-9512-ec7f9f02b253": {
            "tribe": "Danian",
            "stats": {
                "courage": 85,
                "wisdom": 45,
                "speed": 45,
                "power": 55,
                "energy": 65,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "f7cf928c-43ac-476a-9512-ec7f9f02b253",
            "cardId": "",
            "name": "Elna",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/G98lG1U.png",
            "thumb": "https://i.imgur.com/UzPZqTT.jpeg"
        },
        "2487651d-f8eb-4ad2-a2c5-59223f595b94": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 60,
                "wisdom": 70,
                "speed": 50,
                "power": 25,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "2487651d-f8eb-4ad2-a2c5-59223f595b94",
            "cardId": "",
            "name": "Em'swa",
            "chaoticId": "34",
            "cardImage": "https://i.imgur.com/eQ5LRM8.png",
            "thumb": ""
        },
        "a96c3775-d23a-4099-b9ce-e13bea7642f2": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 90,
                "wisdom": 50,
                "speed": 15,
                "power": 90,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "a96c3775-d23a-4099-b9ce-e13bea7642f2",
            "cardId": "",
            "name": "Gan'nim",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/P0R4Uy6.png",
            "thumb": ""
        },
        "ce326c16-f9eb-4112-88b9-93ca653e942f": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 40,
                "wisdom": 65,
                "speed": 75,
                "power": 35,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "ce326c16-f9eb-4112-88b9-93ca653e942f",
            "cardId": "",
            "name": "Ghar'lag",
            "chaoticId": "36",
            "cardImage": "https://i.imgur.com/jGyT5cZ.png",
            "thumb": ""
        },
        "94f411b5-a401-4bb1-9643-06de8e549572": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 60,
                "speed": 40,
                "power": 25,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "94f411b5-a401-4bb1-9643-06de8e549572",
            "cardId": "",
            "name": "Glapaal",
            "chaoticId": "18",
            "cardImage": "https://i.imgur.com/UwQtBdE.png",
            "thumb": ""
        },
        "fb585db2-dfb7-473e-aa1b-012866986151": {
            "tribe": "Danian",
            "stats": {
                "courage": 85,
                "wisdom": 75,
                "speed": 35,
                "power": 50,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "fb585db2-dfb7-473e-aa1b-012866986151",
            "cardId": "",
            "name": "Gorram, Danian General",
            "chaoticId": "19",
            "cardImage": "https://i.imgur.com/Xqbmj8I.png",
            "thumb": ""
        },
        "495c8610-0148-45b4-ba2e-03681b0b5ae3": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 65,
                "speed": 85,
                "power": 50,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "495c8610-0148-45b4-ba2e-03681b0b5ae3",
            "cardId": "",
            "name": "Grantkae, Mipedian General",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/1BUd3sX.png",
            "thumb": ""
        },
        "df40e015-030a-46e4-b1b7-fe178195cffe": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 70,
                "speed": 45,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "df40e015-030a-46e4-b1b7-fe178195cffe",
            "cardId": "",
            "name": "Hune Marquard, Brainwashed Scholar",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/GPop1yi.png",
            "thumb": ""
        },
        "c56cba25-ee37-4d60-b05c-05ac8d67c2b4": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 25,
                "speed": 80,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "c56cba25-ee37-4d60-b05c-05ac8d67c2b4",
            "cardId": "",
            "name": "Jorre, Mipedian Lieutenant",
            "chaoticId": "28",
            "cardImage": "https://i.imgur.com/1kCLERb.png",
            "thumb": "https://i.imgur.com/5BEv58G.jpeg"
        },
        "981270e1-1cb7-44fe-a56e-9a2352722ead": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 55,
                "wisdom": 45,
                "speed": 60,
                "power": 80,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "981270e1-1cb7-44fe-a56e-9a2352722ead",
            "cardId": "",
            "name": "Kamangareth, Unstable Ally",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/GsstGpk.png",
            "thumb": ""
        },
        "a7cd50e6-cf45-4512-a6a5-c75cb5ee160a": {
            "tribe": "Danian",
            "stats": {
                "courage": 40,
                "wisdom": 40,
                "speed": 40,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "a7cd50e6-cf45-4512-a6a5-c75cb5ee160a",
            "cardId": "",
            "name": "Kepiaan, Danian Lieutenant",
            "chaoticId": "20",
            "cardImage": "https://i.imgur.com/waLLUkH.png",
            "thumb": ""
        },
        "00e0cdb7-a4c2-4543-85df-360bd1912ec8": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 100,
                "wisdom": 15,
                "speed": 100,
                "power": 100,
                "energy": 130,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "00e0cdb7-a4c2-4543-85df-360bd1912ec8",
            "cardId": "",
            "name": "Khorror",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/CTTQVVf.png",
            "thumb": ""
        },
        "a4005d74-dd19-416e-8550-23a78086e8f4": {
            "tribe": "Danian",
            "stats": {
                "courage": 90,
                "wisdom": 60,
                "speed": 40,
                "power": 60,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "a4005d74-dd19-416e-8550-23a78086e8f4",
            "cardId": "",
            "name": "Klencka, Avenger",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/lTgbRXN.png",
            "thumb": ""
        },
        "bfb262da-b7db-47c5-b910-60c2f3205d3e": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 65,
                "wisdom": 50,
                "speed": 30,
                "power": 70,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "bfb262da-b7db-47c5-b910-60c2f3205d3e",
            "cardId": "",
            "name": "Loderool",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/IOERXlP.png",
            "thumb": ""
        },
        "0db97032-99b0-4b83-9cda-b036d19508dd": {
            "tribe": "Danian",
            "stats": {
                "courage": 100,
                "wisdom": 60,
                "speed": 30,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "0db97032-99b0-4b83-9cda-b036d19508dd",
            "cardId": "",
            "name": "Lore, Ancestral Caller",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/PciWsoR.png",
            "thumb": "https://i.imgur.com/jw60nB3.jpeg"
        },
        "39c68764-7a7e-4b26-bc9e-08d16fddbc13": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 55,
                "wisdom": 15,
                "speed": 30,
                "power": 85,
                "energy": 70,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "39c68764-7a7e-4b26-bc9e-08d16fddbc13",
            "cardId": "",
            "name": "Magmon, Retalliator",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/LeD5tuC.png",
            "thumb": ""
        },
        "ea9995b9-aad7-43d7-b012-f1b5cf88bfbc": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 70,
                "wisdom": 50,
                "speed": 80,
                "power": 40,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "ea9995b9-aad7-43d7-b012-f1b5cf88bfbc",
            "cardId": "",
            "name": "Majjcan",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/yzHMMN7.png",
            "thumb": ""
        },
        "c71cbdc1-cfbe-444b-8242-73b116aae10f": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 55,
                "speed": 30,
                "power": 45,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "c71cbdc1-cfbe-444b-8242-73b116aae10f",
            "cardId": "",
            "name": "Masilbaat",
            "chaoticId": "23",
            "cardImage": "https://i.imgur.com/daZc4gT.png",
            "thumb": ""
        },
        "31631189-004d-467e-8e51-9815c2b91701": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 110,
                "wisdom": 80,
                "speed": 45,
                "power": 55,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "31631189-004d-467e-8e51-9815c2b91701",
            "cardId": "",
            "name": "Maxxor, Protector of Perim",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/o1tyfyu.png",
            "thumb": ""
        },
        "fa5c70d3-a1c2-4fdc-9ad0-c148f8161f5a": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 80,
                "speed": 60,
                "power": 50,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "fa5c70d3-a1c2-4fdc-9ad0-c148f8161f5a",
            "cardId": "",
            "name": "Nivenna, UnderWorld Lieutenant",
            "chaoticId": "14",
            "cardImage": "https://i.imgur.com/nC51isO.png",
            "thumb": ""
        },
        "fa89f7da-de2f-4e85-9b42-44d418103d4f": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 30,
                "wisdom": 80,
                "speed": 50,
                "power": 25,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "fa89f7da-de2f-4e85-9b42-44d418103d4f",
            "cardId": "",
            "name": "Raquanni",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/fd5JzVM.png",
            "thumb": "https://i.imgur.com/o5tsXbI.jpeg"
        },
        "ca51ba74-ddf7-4065-8988-a27c1c664d2c": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 30,
                "speed": 100,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "ca51ba74-ddf7-4065-8988-a27c1c664d2c",
            "cardId": "",
            "name": "Shinadd",
            "chaoticId": "32",
            "cardImage": "https://i.imgur.com/sIcofI0.png",
            "thumb": ""
        },
        "ad9c88e2-adef-4c5e-a43c-17e72242a7ac": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 95,
                "speed": 35,
                "power": 75,
                "energy": 60,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "ad9c88e2-adef-4c5e-a43c-17e72242a7ac",
            "cardId": "",
            "name": "Tangath Toborn, OverWorld General",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/Xme3zgq.png",
            "thumb": ""
        },
        "fba59496-db19-4e74-b13e-80ff6fcbaa92": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 25,
                "wisdom": 85,
                "speed": 35,
                "power": 40,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "fba59496-db19-4e74-b13e-80ff6fcbaa92",
            "cardId": "",
            "name": "Tir'baleen",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/dqUSIo0.png",
            "thumb": ""
        },
        "411950e7-e58d-44c1-a1ad-94eaba2af5c0": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 65,
                "power": 80,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "411950e7-e58d-44c1-a1ad-94eaba2af5c0",
            "cardId": "",
            "name": "Torrna",
            "chaoticId": "37",
            "cardImage": "https://i.imgur.com/nFq5dLs.png",
            "thumb": ""
        },
        "174d32dd-56df-4234-b785-781645377b81": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 15,
                "speed": 35,
                "power": 95,
                "energy": 20,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "174d32dd-56df-4234-b785-781645377b81",
            "cardId": "",
            "name": "Uksum",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/ot7pY3H.png",
            "thumb": ""
        },
        "bcf4c243-b2a3-4a2d-b0d2-5346cd58dd37": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 105,
                "speed": 30,
                "power": 25,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "bcf4c243-b2a3-4a2d-b0d2-5346cd58dd37",
            "cardId": "",
            "name": "Vidav, Master Strategist",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/G9y7Fm9.png",
            "thumb": ""
        },
        "bec7e19f-ce17-4445-8f8b-03f4a2b05737": {
            "tribe": "Danian",
            "stats": {
                "courage": 45,
                "wisdom": 80,
                "speed": 25,
                "power": 45,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "bec7e19f-ce17-4445-8f8b-03f4a2b05737",
            "cardId": "",
            "name": "Vunhra",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/WtI8UYy.png",
            "thumb": ""
        },
        "2a613db2-5c2c-41ec-b541-d8a67bd078b0": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 40,
                "wisdom": 70,
                "speed": 45,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "2a613db2-5c2c-41ec-b541-d8a67bd078b0",
            "cardId": "",
            "name": "Wilt'dred",
            "chaoticId": "38",
            "cardImage": "https://i.imgur.com/3AGOZib.png",
            "thumb": ""
        },
        "dea22083-0c82-4fe7-80c7-8339d286298b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 80,
                "wisdom": 65,
                "speed": 30,
                "power": 40,
                "energy": 30,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "dea22083-0c82-4fe7-80c7-8339d286298b",
            "cardId": "",
            "name": "Afjak",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/7oQNnKx.png",
            "thumb": ""
        },
        "5148dfcc-af31-4e46-97a8-3017c9533958": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 40,
                "speed": 80,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "5148dfcc-af31-4e46-97a8-3017c9533958",
            "cardId": "",
            "name": "Ajara",
            "chaoticId": "57",
            "cardImage": "https://i.imgur.com/osxMTNM.png",
            "thumb": "https://i.imgur.com/4HkFM8Z.png"
        },
        "480e1512-f169-4902-9f09-b9a3a9ac3bc1": {
            "tribe": "Danian",
            "stats": {
                "courage": 60,
                "wisdom": 80,
                "speed": 40,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "480e1512-f169-4902-9f09-b9a3a9ac3bc1",
            "cardId": "",
            "name": "Ambolx",
            "chaoticId": "45",
            "cardImage": "https://i.imgur.com/2AvUwgH.png",
            "thumb": ""
        },
        "ffc5c95f-e253-4efe-bf9b-3f37a5f792f9": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 70,
                "speed": 60,
                "power": 45,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "ffc5c95f-e253-4efe-bf9b-3f37a5f792f9",
            "cardId": "",
            "name": "Arrthoa, Captain of the Ezoa",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/bsu5gdT.png",
            "thumb": ""
        },
        "67f2b5f3-a373-4ca5-83d8-0b9f4489b750": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 70,
                "speed": 50,
                "power": 45,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "67f2b5f3-a373-4ca5-83d8-0b9f4489b750",
            "cardId": "",
            "name": "Ast'imal",
            "chaoticId": "75",
            "cardImage": "https://i.imgur.com/yL9Ud9G.png",
            "thumb": ""
        },
        "7815c89a-577d-45f1-9b82-8d95c5914f2a": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 60,
                "speed": 40,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "7815c89a-577d-45f1-9b82-8d95c5914f2a",
            "cardId": "",
            "name": "Blazier, Citadel Cartographer",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/aGO8tWz.png",
            "thumb": ""
        },
        "8f33601d-99fe-41ea-bfda-c82770eaacc9": {
            "tribe": "Generic",
            "stats": {
                "courage": 90,
                "wisdom": 20,
                "speed": 50,
                "power": 60,
                "energy": 70,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "8f33601d-99fe-41ea-bfda-c82770eaacc9",
            "cardId": "",
            "name": "Cromaxx",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/1X3hmmW.png",
            "thumb": ""
        },
        "8abfe763-64f4-45d2-9a63-6aa699bbc4d5": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 75,
                "speed": 40,
                "power": 70,
                "energy": 60,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "8abfe763-64f4-45d2-9a63-6aa699bbc4d5",
            "cardId": "",
            "name": "Dalgad",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/OaTmIVv.png",
            "thumb": ""
        },
        "4da4018e-f26b-4a80-9873-52b401365714": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 75,
                "speed": 30,
                "power": 40,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "4da4018e-f26b-4a80-9873-52b401365714",
            "cardId": "",
            "name": "Donmar, Tablet Translator",
            "chaoticId": "9",
            "cardImage": "https://i.imgur.com/8PDrWdp.png",
            "thumb": ""
        },
        "1f51ada7-abaa-4caa-85be-16ca4abbf620": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 80,
                "speed": 60,
                "power": 30,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "1f51ada7-abaa-4caa-85be-16ca4abbf620",
            "cardId": "",
            "name": "Enre-hep, High Muge of the Desert",
            "chaoticId": "58",
            "cardImage": "https://i.imgur.com/V9J2Oqx.png",
            "thumb": ""
        },
        "0adc994a-52b1-4d4f-a79d-13ed230ec7c3": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 65,
                "speed": 45,
                "power": 60,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "0adc994a-52b1-4d4f-a79d-13ed230ec7c3",
            "cardId": "",
            "name": "Eremia",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/mUOtZGc.png",
            "thumb": ""
        },
        "f4abb744-bb11-4e21-9752-66afceeb4d6a": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 35,
                "wisdom": 90,
                "speed": 30,
                "power": 40,
                "energy": 55,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "f4abb744-bb11-4e21-9752-66afceeb4d6a",
            "cardId": "",
            "name": "Fal'makin, AZAIA Inquisitor",
            "chaoticId": "76",
            "cardImage": "https://i.imgur.com/julrXKB.png",
            "thumb": ""
        },
        "fd16fd61-d421-46ce-9f47-a51087cd14dc": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 65,
                "wisdom": 60,
                "speed": 80,
                "power": 25,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "fd16fd61-d421-46ce-9f47-a51087cd14dc",
            "cardId": "",
            "name": "Fasseph",
            "chaoticId": "59",
            "cardImage": "https://i.imgur.com/aqdVjtM.png",
            "thumb": "https://i.imgur.com/pfFLnqx.jpeg"
        },
        "2b68474f-f183-4159-82d4-aa4cf89f5721": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 70,
                "speed": 30,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "2b68474f-f183-4159-82d4-aa4cf89f5721",
            "cardId": "",
            "name": "Gareep",
            "chaoticId": "46",
            "cardImage": "https://i.imgur.com/AIqnSzS.png",
            "thumb": ""
        },
        "a159ebcb-34c6-4130-81c2-b0778252b1df": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 40,
                "speed": 80,
                "power": 40,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "a159ebcb-34c6-4130-81c2-b0778252b1df",
            "cardId": "",
            "name": "Ghundac",
            "chaoticId": "47",
            "cardImage": "https://i.imgur.com/6Um8sg9.png",
            "thumb": "https://i.imgur.com/g9E41ja.jpeg"
        },
        "134014fa-4bc6-478a-bdc5-4174fdf68e41": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 120,
                "wisdom": 30,
                "speed": 120,
                "power": 120,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "134014fa-4bc6-478a-bdc5-4174fdf68e41",
            "cardId": "",
            "name": "Gintanai, The Forgotten",
            "chaoticId": "60",
            "cardImage": "https://i.imgur.com/ZFw3ZlE.png",
            "thumb": "https://i.imgur.com/lhrUPaE.jpeg"
        },
        "efd34f00-f718-4ad8-8dd0-529e34133bd6": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 45,
                "wisdom": 60,
                "speed": 60,
                "power": 35,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "efd34f00-f718-4ad8-8dd0-529e34133bd6",
            "cardId": "",
            "name": "Habekh",
            "chaoticId": "61",
            "cardImage": "https://i.imgur.com/XnInowv.png",
            "thumb": ""
        },
        "5c56aa1d-4e31-4dad-aa94-8e60cdde6c01": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 45,
                "speed": 95,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "5c56aa1d-4e31-4dad-aa94-8e60cdde6c01",
            "cardId": "",
            "name": "Headmaster Ankhyja, Seeker of the Art",
            "chaoticId": "62",
            "cardImage": "https://i.imgur.com/1X3uEqA.png",
            "thumb": ""
        },
        "2ba66137-ca32-4c4c-a3d6-de44aafdff4e": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 75,
                "speed": 30,
                "power": 25,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "2ba66137-ca32-4c4c-a3d6-de44aafdff4e",
            "cardId": "",
            "name": "Herken",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/jOh1SiJ.png",
            "thumb": ""
        },
        "c9c00a0b-3b1d-4cdf-bec2-c9457724dc73": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 50,
                "speed": 30,
                "power": 60,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "c9c00a0b-3b1d-4cdf-bec2-c9457724dc73",
            "cardId": "",
            "name": "Hiadrom, Rock Ripper",
            "chaoticId": "48",
            "cardImage": "https://i.imgur.com/4Gtw3yr.png",
            "thumb": ""
        },
        "751e914b-4f34-4d7e-80d4-d7e7c579c663": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 75,
                "speed": 30,
                "power": 50,
                "energy": 35,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "751e914b-4f34-4d7e-80d4-d7e7c579c663",
            "cardId": "",
            "name": "Hune Canin",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/4fswDdD.png",
            "thumb": ""
        },
        "117b9a90-ff06-4b25-9077-831e5dcabd97": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 30,
                "wisdom": 60,
                "speed": 70,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "117b9a90-ff06-4b25-9077-831e5dcabd97",
            "cardId": "",
            "name": "Ifjann",
            "chaoticId": "63",
            "cardImage": "https://i.imgur.com/1r4ovBa.png",
            "thumb": "https://i.imgur.com/zHt4C2w.jpeg"
        },
        "08d2f4aa-4631-43e0-80cb-dd8a728eb223": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 45,
                "wisdom": 75,
                "speed": 80,
                "power": 45,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "08d2f4aa-4631-43e0-80cb-dd8a728eb223",
            "cardId": "",
            "name": "Ihun'kalin, Psionic Master",
            "chaoticId": "77",
            "cardImage": "https://i.imgur.com/VcjCw8g.png",
            "thumb": ""
        },
        "6d0621d9-105a-46c1-a7bb-e555f9a1105c": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 80,
                "speed": 60,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "6d0621d9-105a-46c1-a7bb-e555f9a1105c",
            "cardId": "",
            "name": "Illiar",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/s2mkaKQ.png",
            "thumb": ""
        },
        "8b1ddb2a-acda-41b4-b08f-70d83c7b3bac": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 50,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "8b1ddb2a-acda-41b4-b08f-70d83c7b3bac",
            "cardId": "",
            "name": "Iparu, Metallic Ally",
            "chaoticId": "14",
            "cardImage": "https://i.imgur.com/KxRmmzw.png",
            "thumb": ""
        },
        "655e5abb-a0e2-4669-8252-62913ccb7afe": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 90,
                "wisdom": 30,
                "speed": 80,
                "power": 80,
                "energy": 85,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "655e5abb-a0e2-4669-8252-62913ccb7afe",
            "cardId": "",
            "name": "Ixxik",
            "chaoticId": "64",
            "cardImage": "https://i.imgur.com/A63FQ4J.png",
            "thumb": "https://i.imgur.com/CYcJFQh.jpeg"
        },
        "a869a1cd-845e-4abd-b745-d38e356085cb": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 30,
                "speed": 60,
                "power": 95,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a869a1cd-845e-4abd-b745-d38e356085cb",
            "cardId": "",
            "name": "Kaal",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/ynZrimu.png",
            "thumb": ""
        },
        "d7a7cf57-1bab-4bc2-b7a2-82b5c8e1a1be": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 40,
                "speed": 20,
                "power": 80,
                "energy": 70,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "d7a7cf57-1bab-4bc2-b7a2-82b5c8e1a1be",
            "cardId": "",
            "name": "Ketacc",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/2o0zAmu.png",
            "thumb": ""
        },
        "7aa0b416-8401-48e9-8b22-1be30d7fd3f4": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 80,
                "speed": 55,
                "power": 60,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "7aa0b416-8401-48e9-8b22-1be30d7fd3f4",
            "cardId": "",
            "name": "Ketun",
            "chaoticId": "49",
            "cardImage": "https://i.imgur.com/eUdWVMj.png",
            "thumb": ""
        },
        "dbb63dfe-b3c7-49e6-8f14-901dc16224e0": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 65,
                "wisdom": 35,
                "speed": 90,
                "power": 40,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "dbb63dfe-b3c7-49e6-8f14-901dc16224e0",
            "cardId": "",
            "name": "Khenti",
            "chaoticId": "65",
            "cardImage": "https://i.imgur.com/WiIEbIE.png",
            "thumb": "https://i.imgur.com/J4lifBk.jpeg"
        },
        "ac0b52cd-b1d5-4563-a940-86c961557bd7": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 40,
                "speed": 30,
                "power": 60,
                "energy": 45,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ac0b52cd-b1d5-4563-a940-86c961557bd7",
            "cardId": "",
            "name": "Khybon, Magma Dam Overseer",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/z65VS1v.png",
            "thumb": ""
        },
        "e07c92ab-85e9-4c84-96f9-7657225d3a41": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 70,
                "wisdom": 40,
                "speed": 75,
                "power": 90,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "e07c92ab-85e9-4c84-96f9-7657225d3a41",
            "cardId": "",
            "name": "Kiru",
            "chaoticId": "28",
            "cardImage": "https://i.imgur.com/IgWYrnm.png",
            "thumb": ""
        },
        "7870562b-051a-4d42-a44f-1901600ed4fe": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 70,
                "speed": 50,
                "power": 80,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "7870562b-051a-4d42-a44f-1901600ed4fe",
            "cardId": "",
            "name": "Klik'ssi",
            "chaoticId": "78",
            "cardImage": "https://i.imgur.com/38pzE7D.png",
            "thumb": ""
        },
        "35a81449-d803-46b0-95d0-a469469e1f71": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 65,
                "wisdom": 35,
                "speed": 85,
                "power": 35,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "35a81449-d803-46b0-95d0-a469469e1f71",
            "cardId": "",
            "name": "Kojjbel",
            "chaoticId": "66",
            "cardImage": "https://i.imgur.com/RTKAtoR.png",
            "thumb": ""
        },
        "022b5432-aee5-455e-b32f-1c2a2b5e9c52": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 70,
                "wisdom": 45,
                "speed": 95,
                "power": 45,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "022b5432-aee5-455e-b32f-1c2a2b5e9c52",
            "cardId": "",
            "name": "Kolmo, Purified",
            "chaoticId": "67",
            "cardImage": "https://i.imgur.com/smkr1ay.png",
            "thumb": "https://i.imgur.com/LVMbWTa.jpeg"
        },
        "d912fec8-4c47-4b36-9fd5-f88377923bb0": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 30,
                "wisdom": 70,
                "speed": 40,
                "power": 70,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d912fec8-4c47-4b36-9fd5-f88377923bb0",
            "cardId": "",
            "name": "Kopond, High Muge of the Hearth",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/BuuyAJf.png",
            "thumb": ""
        },
        "8f8a09fe-06bc-4136-96d3-f6e5c4e8bd3f": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 70,
                "speed": 25,
                "power": 35,
                "energy": 35,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "8f8a09fe-06bc-4136-96d3-f6e5c4e8bd3f",
            "cardId": "",
            "name": "Korg",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/GrljtTd.png",
            "thumb": ""
        },
        "ce3ddcfa-7a32-4e25-a109-584f849d06db": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 30,
                "speed": 60,
                "power": 55,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "ce3ddcfa-7a32-4e25-a109-584f849d06db",
            "cardId": "",
            "name": "Krekk, Phalanx Recon",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/UYcJwR8.png",
            "thumb": ""
        },
        "f90728a2-93a3-4ec5-bd9b-fda9a71bda68": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 80,
                "wisdom": 75,
                "speed": 45,
                "power": 45,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "f90728a2-93a3-4ec5-bd9b-fda9a71bda68",
            "cardId": "",
            "name": "Lomma, Desert Wanderer",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/43NzVF6.png",
            "thumb": ""
        },
        "d190a483-d231-4a51-a305-a0eae4120fcb": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 90,
                "speed": 30,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "d190a483-d231-4a51-a305-a0eae4120fcb",
            "cardId": "",
            "name": "Lore, High Muge of the Hive",
            "chaoticId": "36",
            "cardImage": "https://i.imgur.com/dvmpXUx.png",
            "thumb": "https://i.imgur.com/RhdCIFg.jpeg"
        },
        "c5f8931e-1dd4-464d-b0c4-59820d11eca1": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 75,
                "wisdom": 40,
                "speed": 40,
                "power": 60,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c5f8931e-1dd4-464d-b0c4-59820d11eca1",
            "cardId": "",
            "name": "Maglax, Lodestone Seeker",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/O9dXcfF.jpg",
            "thumb": ""
        },
        "ea78877a-022f-4435-a8b3-01f84a66db39": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 30,
                "wisdom": 20,
                "speed": 45,
                "power": 75,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ea78877a-022f-4435-a8b3-01f84a66db39",
            "cardId": "",
            "name": "Magmon, Engulfed",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/xjIN80Z.png",
            "thumb": ""
        },
        "b8ed1a32-eb77-4072-9677-c903743bf7e1": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 35,
                "speed": 70,
                "power": 25,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "b8ed1a32-eb77-4072-9677-c903743bf7e1",
            "cardId": "",
            "name": "Makromil",
            "chaoticId": "50",
            "cardImage": "https://i.imgur.com/4PjUzyd.png",
            "thumb": ""
        },
        "4a3ef8f9-ca69-4390-8fe8-0cede8f8eea0": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 40,
                "speed": 30,
                "power": 60,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": true,
                "air": true
            },
            "id": "4a3ef8f9-ca69-4390-8fe8-0cede8f8eea0",
            "cardId": "",
            "name": "Mhein",
            "chaoticId": "39",
            "cardImage": "https://i.imgur.com/XT3Vko8.png",
            "thumb": ""
        },
        "32096b42-76af-4514-8a8e-441c8a1d41d4": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 80,
                "speed": 60,
                "power": 50,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "32096b42-76af-4514-8a8e-441c8a1d41d4",
            "cardId": "",
            "name": "Milla'iin, Foothold Commander",
            "chaoticId": "79",
            "cardImage": "https://i.imgur.com/vihSeRd.png",
            "thumb": ""
        },
        "d8793d35-124b-45db-83c9-92fbd5683392": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 60,
                "wisdom": 50,
                "speed": 50,
                "power": 65,
                "energy": 35,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "d8793d35-124b-45db-83c9-92fbd5683392",
            "cardId": "",
            "name": "Mock'adyn, Fluid Master",
            "chaoticId": "80",
            "cardImage": "https://i.imgur.com/hd7KumV.png",
            "thumb": ""
        },
        "c1e119ce-2085-44a6-9358-72328f005878": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 100,
                "speed": 30,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "c1e119ce-2085-44a6-9358-72328f005878",
            "cardId": "",
            "name": "Najarin, High Muge of the Lake",
            "chaoticId": "18",
            "cardImage": "https://i.imgur.com/BsJJvt1.png",
            "thumb": ""
        },
        "15e1b28c-e548-4709-beff-b02e1f77e2f6": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 90,
                "speed": 30,
                "power": 30,
                "energy": 25,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "15e1b28c-e548-4709-beff-b02e1f77e2f6",
            "cardId": "",
            "name": "Najarin, Younger",
            "chaoticId": "19",
            "cardImage": "https://i.imgur.com/4QPM3Y6.png",
            "thumb": ""
        },
        "9b2b9de7-cf6c-4d63-b902-4e13ff8d000b": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 60,
                "speed": 55,
                "power": 50,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": false,
                "air": true
            },
            "id": "9b2b9de7-cf6c-4d63-b902-4e13ff8d000b",
            "cardId": "",
            "name": "Nauthilax, Aquatic Spy",
            "chaoticId": "32",
            "cardImage": "https://i.imgur.com/4B4yjuR.png",
            "thumb": ""
        },
        "4be4a92f-759d-4cab-98cb-358890bb03bd": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 70,
                "speed": 30,
                "power": 50,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4be4a92f-759d-4cab-98cb-358890bb03bd",
            "cardId": "",
            "name": "Nimmei, Expedition Overseer",
            "chaoticId": "40",
            "cardImage": "https://i.imgur.com/kaZq5z1.png",
            "thumb": ""
        },
        "7322c054-bb3f-4c5d-a6d4-bdec61ba1701": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 90,
                "wisdom": 25,
                "speed": 150,
                "power": 90,
                "energy": 70,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "7322c054-bb3f-4c5d-a6d4-bdec61ba1701",
            "cardId": "",
            "name": "Ninren",
            "chaoticId": "68",
            "cardImage": "https://i.imgur.com/0cZHhz0.png",
            "thumb": ""
        },
        "8ce35030-b8fb-4070-aeae-692fa556bac7": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 60,
                "speed": 30,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "8ce35030-b8fb-4070-aeae-692fa556bac7",
            "cardId": "",
            "name": "Nom, Servant of Earth",
            "chaoticId": "41",
            "cardImage": "https://i.imgur.com/VO9z8tA.png",
            "thumb": "https://i.imgur.com/HCsWSVa.jpeg"
        },
        "485bed63-2ac7-42af-973a-0f5acd3d5540": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 70,
                "speed": 40,
                "power": 60,
                "energy": 35,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "485bed63-2ac7-42af-973a-0f5acd3d5540",
            "cardId": "",
            "name": "Nunk'worn, Assimilated",
            "chaoticId": "42",
            "cardImage": "https://i.imgur.com/1OkpqCE.png",
            "thumb": ""
        },
        "fb47ab2f-8e46-4c71-8a6b-f09ce8801760": {
            "tribe": "Danian",
            "stats": {
                "courage": 90,
                "wisdom": 30,
                "speed": 30,
                "power": 50,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "fb47ab2f-8e46-4c71-8a6b-f09ce8801760",
            "cardId": "",
            "name": "Odu-Bathax, Reservoir Reclaimer",
            "chaoticId": "51",
            "cardImage": "https://i.imgur.com/BWdslTr.png",
            "thumb": ""
        },
        "238478fa-e232-49e0-a511-b8f69e0e11ae": {
            "tribe": "Danian",
            "stats": {
                "courage": 60,
                "wisdom": 60,
                "speed": 25,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "238478fa-e232-49e0-a511-b8f69e0e11ae",
            "cardId": "",
            "name": "Orbaat",
            "chaoticId": "52",
            "cardImage": "https://i.imgur.com/FHYdYxp.png",
            "thumb": ""
        },
        "24ca7897-4974-4b85-9f1d-8901593557d0": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 20,
                "speed": 50,
                "power": 60,
                "energy": 45,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "24ca7897-4974-4b85-9f1d-8901593557d0",
            "cardId": "",
            "name": "Piddan",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/75q3Xlk.png",
            "thumb": ""
        },
        "c8b6fdbd-09fe-41e3-a8a9-88c335650076": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 90,
                "wisdom": 60,
                "speed": 50,
                "power": 50,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c8b6fdbd-09fe-41e3-a8a9-88c335650076",
            "cardId": "",
            "name": "Porthyn",
            "chaoticId": "20",
            "cardImage": "https://i.imgur.com/OwWdwfx.png",
            "thumb": ""
        },
        "80d216bb-58f0-484a-b4fe-167584cab74d": {
            "tribe": "Generic",
            "stats": {
                "courage": 50,
                "wisdom": 25,
                "speed": 85,
                "power": 65,
                "energy": 65,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "80d216bb-58f0-484a-b4fe-167584cab74d",
            "cardId": "",
            "name": "Proboscar",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/OsfgeAF.png",
            "thumb": ""
        },
        "9ef11340-8fe7-4a78-b08d-4488bb60a19d": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 70,
                "wisdom": 50,
                "speed": 90,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "9ef11340-8fe7-4a78-b08d-4488bb60a19d",
            "cardId": "",
            "name": "Qwun, Solitary Scout",
            "chaoticId": "69",
            "cardImage": "https://i.imgur.com/8NLd8NU.png",
            "thumb": "https://i.imgur.com/sYxc58g.jpeg"
        },
        "da421d19-0bc4-4a4e-8d37-ca6206cc44e4": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 70,
                "wisdom": 90,
                "speed": 25,
                "power": 20,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "da421d19-0bc4-4a4e-8d37-ca6206cc44e4",
            "cardId": "",
            "name": "Rath'tab, Mind Scryer",
            "chaoticId": "81",
            "cardImage": "https://i.imgur.com/uX2A9HR.png",
            "thumb": ""
        },
        "8f7b8079-4a03-4af9-b7d0-6927403b4780": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 50,
                "speed": 60,
                "power": 100,
                "energy": 70,
                "fire": true,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "8f7b8079-4a03-4af9-b7d0-6927403b4780",
            "cardId": "",
            "name": "Rothar, Forceful Negotiator",
            "chaoticId": "34",
            "cardImage": "https://i.imgur.com/E1DQfuF.png",
            "thumb": ""
        },
        "cf8688bc-0a99-42b3-a686-3c68a1e054bd": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 30,
                "wisdom": 30,
                "speed": 70,
                "power": 70,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "cf8688bc-0a99-42b3-a686-3c68a1e054bd",
            "cardId": "",
            "name": "Savitsa",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/i2jHXHt.png",
            "thumb": ""
        },
        "3520fc25-eeab-4340-9d46-a8a8b25be41a": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 40,
                "speed": 45,
                "power": 80,
                "energy": 35,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "3520fc25-eeab-4340-9d46-a8a8b25be41a",
            "cardId": "",
            "name": "Seeryn, Servant of Fire",
            "chaoticId": "36",
            "cardImage": "https://i.imgur.com/Vnjm1bn.png",
            "thumb": ""
        },
        "a82ab3f7-5426-484d-977e-c07abe0e796b": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 45,
                "wisdom": 60,
                "speed": 85,
                "power": 25,
                "energy": 45,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "a82ab3f7-5426-484d-977e-c07abe0e796b",
            "cardId": "",
            "name": "Sepmek",
            "chaoticId": "70",
            "cardImage": "https://i.imgur.com/EMvGDAJ.png",
            "thumb": ""
        },
        "5b32e4a8-bc63-428d-8802-9a923ebbb722": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 80,
                "wisdom": 60,
                "speed": 30,
                "power": 40,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "5b32e4a8-bc63-428d-8802-9a923ebbb722",
            "cardId": "",
            "name": "Silchaw",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/XBuk9yR.png",
            "thumb": ""
        },
        "835cfc25-2c0d-4e4e-b9b8-4db834fe348f": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 30,
                "speed": 85,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "835cfc25-2c0d-4e4e-b9b8-4db834fe348f",
            "cardId": "",
            "name": "Silv, Servant of Air",
            "chaoticId": "71",
            "cardImage": "https://i.imgur.com/3cjnprB.png",
            "thumb": "https://i.imgur.com/f5Q1Ah4.jpeg"
        },
        "3c011528-369c-4bf8-8bb3-45828b7ba7b3": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 70,
                "wisdom": 40,
                "speed": 70,
                "power": 75,
                "energy": 35,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "3c011528-369c-4bf8-8bb3-45828b7ba7b3",
            "cardId": "",
            "name": "Skithia, Gothos Spy",
            "chaoticId": "37",
            "cardImage": "https://i.imgur.com/3B1yRfL.png",
            "thumb": ""
        },
        "ba8223eb-3f9b-4037-b923-b23fdf96df44": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 20,
                "speed": 50,
                "power": 80,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "ba8223eb-3f9b-4037-b923-b23fdf96df44",
            "cardId": "",
            "name": "Skorblust",
            "chaoticId": "38",
            "cardImage": "https://i.imgur.com/K8TDy6F.png",
            "thumb": ""
        },
        "a13f0e8d-4ea6-4756-aaff-2d4059f8233d": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 35,
                "speed": 30,
                "power": 60,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a13f0e8d-4ea6-4756-aaff-2d4059f8233d",
            "cardId": "",
            "name": "Slufurah, Treacherous Translator",
            "chaoticId": "39",
            "cardImage": "https://i.imgur.com/3XddiQh.png",
            "thumb": ""
        },
        "592b55e7-2ecd-4d50-be08-d6c02eb2b541": {
            "tribe": "Generic",
            "stats": {
                "courage": 60,
                "wisdom": 35,
                "speed": 60,
                "power": 90,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "592b55e7-2ecd-4d50-be08-d6c02eb2b541",
            "cardId": "",
            "name": "Smildon",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/3y9WKPz.png",
            "thumb": ""
        },
        "b73f5c91-84f6-4581-9953-6218daaa3611": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 65,
                "speed": 45,
                "power": 30,
                "energy": 55,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "b73f5c91-84f6-4581-9953-6218daaa3611",
            "cardId": "",
            "name": "Somnort",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/zJfk3Lu.png",
            "thumb": ""
        },
        "3702dd20-ce22-4539-9577-565265c6205b": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 60,
                "speed": 70,
                "power": 45,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "3702dd20-ce22-4539-9577-565265c6205b",
            "cardId": "",
            "name": "Son'las",
            "chaoticId": "82",
            "cardImage": "https://i.imgur.com/3hKUq7s.png",
            "thumb": ""
        },
        "83d84d46-a3b2-4be6-9362-4c3eb2557cad": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 20,
                "wisdom": 20,
                "speed": 20,
                "power": 20,
                "energy": 20,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "83d84d46-a3b2-4be6-9362-4c3eb2557cad",
            "cardId": "",
            "name": "Stelgar, Vicious Mutation",
            "chaoticId": "40",
            "cardImage": "https://i.imgur.com/SRMH2NI.png",
            "thumb": ""
        },
        "8f31b4ae-7426-406e-8d23-4b0bc34b6ccc": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 70,
                "wisdom": 65,
                "speed": 65,
                "power": 20,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "8f31b4ae-7426-406e-8d23-4b0bc34b6ccc",
            "cardId": "",
            "name": "Taffial, Cothica Hunter",
            "chaoticId": "72",
            "cardImage": "https://i.imgur.com/JNS961Z.png",
            "thumb": "https://i.imgur.com/BmuhN2m.jpeg"
        },
        "abcb9257-d837-4eb2-94de-493521cc51a7": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 35,
                "speed": 40,
                "power": 40,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "abcb9257-d837-4eb2-94de-493521cc51a7",
            "cardId": "",
            "name": "Tarin",
            "chaoticId": "53",
            "cardImage": "https://i.imgur.com/7srjL5r.png",
            "thumb": ""
        },
        "42aef2e8-b698-47e3-9adb-e23743214d8e": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 70,
                "wisdom": 60,
                "speed": 30,
                "power": 80,
                "energy": 55,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "42aef2e8-b698-47e3-9adb-e23743214d8e",
            "cardId": "",
            "name": "Thar'lyn, AZAIA Spy",
            "chaoticId": "83",
            "cardImage": "https://i.imgur.com/G3uFRN1.png",
            "thumb": ""
        },
        "a22522d2-ab52-49bf-b463-822e9b4d5a5e": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 80,
                "speed": 30,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "a22522d2-ab52-49bf-b463-822e9b4d5a5e",
            "cardId": "",
            "name": "Tharc, Tablet Translator",
            "chaoticId": "54",
            "cardImage": "https://i.imgur.com/6roQvZw.png",
            "thumb": ""
        },
        "c8584ffb-3ea0-4170-baaa-307fb8899212": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 30,
                "speed": 35,
                "power": 70,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c8584ffb-3ea0-4170-baaa-307fb8899212",
            "cardId": "",
            "name": "Toadore",
            "chaoticId": "41",
            "cardImage": "https://i.imgur.com/VV3ekkO.png",
            "thumb": ""
        },
        "62fb1e67-d025-448c-a79f-ea3c1c87ba37": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 70,
                "speed": 30,
                "power": 30,
                "energy": 45,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "62fb1e67-d025-448c-a79f-ea3c1c87ba37",
            "cardId": "",
            "name": "Ulmar, Perithon Racer",
            "chaoticId": "42",
            "cardImage": "https://i.imgur.com/K9blaHR.png",
            "thumb": ""
        },
        "74132726-263f-4e19-81fa-cd8bfad21639": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 80,
                "speed": 45,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "74132726-263f-4e19-81fa-cd8bfad21639",
            "cardId": "",
            "name": "Unda, Servant of Water",
            "chaoticId": "23",
            "cardImage": "https://i.imgur.com/CB8tcLg.png",
            "thumb": ""
        },
        "1a345726-6937-4d8d-b9f1-95acfc87f0d1": {
            "tribe": "Generic",
            "stats": {
                "courage": 60,
                "wisdom": 45,
                "speed": 45,
                "power": 85,
                "energy": 80,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "1a345726-6937-4d8d-b9f1-95acfc87f0d1",
            "cardId": "",
            "name": "Ursis",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/WdrV4oh.png",
            "thumb": ""
        },
        "4195e386-cbd1-449e-9fc9-87d55d7d8c6f": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 65,
                "speed": 40,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4195e386-cbd1-449e-9fc9-87d55d7d8c6f",
            "cardId": "",
            "name": "Valban",
            "chaoticId": "55",
            "cardImage": "https://i.imgur.com/nINXxzc.png",
            "thumb": ""
        },
        "7e4a2114-6140-4d8d-9fa8-98cd581140b7": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 80,
                "wisdom": 50,
                "speed": 60,
                "power": 60,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "7e4a2114-6140-4d8d-9fa8-98cd581140b7",
            "cardId": "",
            "name": "Vlar",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/xedyEyG.png",
            "thumb": ""
        },
        "52ebed3c-1c3c-451b-8cb6-2054e15818c2": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 60,
                "speed": 30,
                "power": 70,
                "energy": 50,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "52ebed3c-1c3c-451b-8cb6-2054e15818c2",
            "cardId": "",
            "name": "Voorx",
            "chaoticId": "43",
            "cardImage": "https://i.imgur.com/OExKZYS.png",
            "thumb": ""
        },
        "19e523a6-536f-4ff5-8570-2def5ac30e05": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 75,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "19e523a6-536f-4ff5-8570-2def5ac30e05",
            "cardId": "",
            "name": "Ylinné",
            "chaoticId": "73",
            "cardImage": "https://i.imgur.com/fQytPpp.png",
            "thumb": "https://i.imgur.com/u3JSgw7.jpeg"
        },
        "8e2c86c9-9157-48ea-a9fe-9c09a695933a": {
            "tribe": "Danian",
            "stats": {
                "courage": 60,
                "wisdom": 65,
                "speed": 30,
                "power": 35,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "8e2c86c9-9157-48ea-a9fe-9c09a695933a",
            "cardId": "",
            "name": "Yondaf, Symbiotic Infector",
            "chaoticId": "56",
            "cardImage": "https://i.imgur.com/3IWLSLS.png",
            "thumb": ""
        },
        "07afe59c-e79a-400b-b8f3-eddcfc437443": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 40,
                "speed": 80,
                "power": 60,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "07afe59c-e79a-400b-b8f3-eddcfc437443",
            "cardId": "",
            "name": "Zamool, Lord Van Bloot's Enforcer",
            "chaoticId": "44",
            "cardImage": "https://i.imgur.com/sh4t8Lk.png",
            "thumb": ""
        },
        "9cdfbd5b-91ba-4165-9a5c-ec24ed201159": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 65,
                "wisdom": 30,
                "speed": 95,
                "power": 45,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "9cdfbd5b-91ba-4165-9a5c-ec24ed201159",
            "cardId": "",
            "name": "Zhade, Dig Site Defender",
            "chaoticId": "74",
            "cardImage": "https://i.imgur.com/EkAhpZZ.png",
            "thumb": ""
        },
        "472919aa-2465-45f4-8710-8b9f86b253c8": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 100,
                "wisdom": 75,
                "speed": 40,
                "power": 50,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "472919aa-2465-45f4-8710-8b9f86b253c8",
            "cardId": "",
            "name": "Arctus, Heptadd's Squire",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/4TaV6eY.jpg",
            "thumb": ""
        },
        "2b35d7e1-b2d1-48cc-8a87-00c25b12a152": {
            "tribe": "Danian",
            "stats": {
                "courage": 80,
                "wisdom": 85,
                "speed": 35,
                "power": 30,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "2b35d7e1-b2d1-48cc-8a87-00c25b12a152",
            "cardId": "",
            "name": "Aszil, the Young Queen",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/VCVBPVG.png",
            "thumb": "https://i.imgur.com/V02zNIW.jpeg"
        },
        "2da28ec0-b014-4495-a983-6c51a97711d7": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 70,
                "speed": 85,
                "power": 30,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "2da28ec0-b014-4495-a983-6c51a97711d7",
            "cardId": "",
            "name": "Bidua",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/9IA6kzI.png",
            "thumb": ""
        },
        "e86b406e-9a9b-4c97-b0bf-29d807ed0baf": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 80,
                "speed": 30,
                "power": 20,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e86b406e-9a9b-4c97-b0bf-29d807ed0baf",
            "cardId": "",
            "name": "Bodal, Flamedrill Researcher",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/f3K6ZLf.png",
            "thumb": ""
        },
        "2cc31b9e-51ed-45be-ba40-a46d946fc493": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 30,
                "speed": 50,
                "power": 75,
                "energy": 55,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "2cc31b9e-51ed-45be-ba40-a46d946fc493",
            "cardId": "",
            "name": "Cyrenox",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/Kcqw8mD.png",
            "thumb": ""
        },
        "30a7698e-32bc-4731-8395-94a1b0bb817b": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 70,
                "speed": 30,
                "power": 75,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "30a7698e-32bc-4731-8395-94a1b0bb817b",
            "cardId": "",
            "name": "Ginar'rash, The Extinguisher",
            "chaoticId": "19",
            "cardImage": "https://i.imgur.com/xGQ5JWP.png",
            "thumb": ""
        },
        "ec7e9429-acb0-4614-9b77-8fb39530dc8e": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ec7e9429-acb0-4614-9b77-8fb39530dc8e",
            "cardId": "",
            "name": "Kerabahn, The Stingbeast",
            "chaoticId": "",
            "cardImage": "https://i.imgur.com/twdi6qv.jpg",
            "thumb": ""
        },
        "5ca17e2a-f595-424a-9075-37b3dac728f2": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 85,
                "wisdom": 45,
                "speed": 100,
                "power": 50,
                "energy": 65,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "5ca17e2a-f595-424a-9075-37b3dac728f2",
            "cardId": "",
            "name": "Malvadine, The King's Herald",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/R51fmxU.png",
            "thumb": "https://i.imgur.com/4vPZ1tz.jpeg"
        },
        "04efff73-fb2d-44a3-bdaf-38f7523da1a1": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 100,
                "wisdom": 70,
                "speed": 50,
                "power": 50,
                "energy": 60,
                "fire": true,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "04efff73-fb2d-44a3-bdaf-38f7523da1a1",
            "cardId": "",
            "name": "Maxxor, Elemental Champion",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/IAbVRsz.png",
            "thumb": ""
        },
        "942093bd-976c-443c-8d4a-c4ecbdc88588": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 65,
                "speed": 35,
                "power": 40,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "942093bd-976c-443c-8d4a-c4ecbdc88588",
            "cardId": "",
            "name": "Riggan",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/7ZpHsmX.png",
            "thumb": ""
        },
        "93ce2bc0-7e27-477d-ad82-c3679da05ed7": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 70,
                "speed": 40,
                "power": 40,
                "energy": 30,
                "fire": true,
                "water": true,
                "earth": true,
                "air": true
            },
            "id": "93ce2bc0-7e27-477d-ad82-c3679da05ed7",
            "cardId": "",
            "name": "Tassanil, High Elementalist",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/EN5MM5N.png",
            "thumb": ""
        },
        "a8e8467e-0978-4f7d-b84c-08731b37e41d": {
            "tribe": "Danian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a8e8467e-0978-4f7d-b84c-08731b37e41d",
            "cardId": "",
            "name": "Tharkas",
            "chaoticId": "",
            "cardImage": "https://i.imgur.com/BSioVcT.png",
            "thumb": ""
        },
        "b0f7f5dc-e1ee-423a-a943-7d5a998c852f": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 40,
                "speed": 25,
                "power": 65,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "b0f7f5dc-e1ee-423a-a943-7d5a998c852f",
            "cardId": "",
            "name": "Wamma, Flame Guard",
            "chaoticId": "20",
            "cardImage": "https://i.imgur.com/OVXOsyD.png",
            "thumb": ""
        },
        "51bd18c6-4906-4b0a-b5ef-58b7272272be": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 20,
                "speed": 30,
                "power": 50,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "51bd18c6-4906-4b0a-b5ef-58b7272272be",
            "cardId": "",
            "name": "Aimukk",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/MyNF43i.png",
            "thumb": ""
        },
        "624733f4-f59d-4d7a-896c-910b6e08b39d": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 65,
                "speed": 50,
                "power": 85,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "624733f4-f59d-4d7a-896c-910b6e08b39d",
            "cardId": "",
            "name": "Chargola",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/fNsJJ49.png",
            "thumb": ""
        },
        "2b8e9f6f-8e83-4619-94ea-aa1090fc6b45": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 35,
                "wisdom": 45,
                "speed": 65,
                "power": 60,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "2b8e9f6f-8e83-4619-94ea-aa1090fc6b45",
            "cardId": "",
            "name": "Dyrtax",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/Ycbkbh5.png",
            "thumb": ""
        },
        "4fc80f6e-d4d5-4135-bfc1-a6d396048909": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 25,
                "speed": 45,
                "power": 95,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4fc80f6e-d4d5-4135-bfc1-a6d396048909",
            "cardId": "",
            "name": "Getterek",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/V99ZrLM.png",
            "thumb": ""
        },
        "b975cfe2-3d2d-4732-b7e9-025f4ea7228f": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 65,
                "speed": 60,
                "power": 20,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "b975cfe2-3d2d-4732-b7e9-025f4ea7228f",
            "cardId": "",
            "name": "Ghatup",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/xAu24mD.png",
            "thumb": ""
        },
        "bc70f14a-723e-468c-9a0c-b1565b996cd9": {
            "tribe": "Danian",
            "stats": {
                "courage": 55,
                "wisdom": 30,
                "speed": 55,
                "power": 50,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "bc70f14a-723e-468c-9a0c-b1565b996cd9",
            "cardId": "",
            "name": "Nakal",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/Ho6d5UF.png",
            "thumb": ""
        },
        "53a68adb-1181-4524-84a7-0704103c80b6": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 45,
                "speed": 50,
                "power": 80,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "53a68adb-1181-4524-84a7-0704103c80b6",
            "cardId": "",
            "name": "Nebres",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/QQAowVl.png",
            "thumb": ""
        },
        "d77cdcac-f152-43c2-8bfb-ec2d5e005ceb": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 80,
                "speed": 35,
                "power": 25,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d77cdcac-f152-43c2-8bfb-ec2d5e005ceb",
            "cardId": "",
            "name": "Neffa",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/Cjtpy85.png",
            "thumb": ""
        },
        "edf0ea61-3416-4369-9383-0eb915568583": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 30,
                "wisdom": 80,
                "speed": 55,
                "power": 55,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "edf0ea61-3416-4369-9383-0eb915568583",
            "cardId": "",
            "name": "Sukoval",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/ukZrVzB.png",
            "thumb": ""
        },
        "ff2ce933-7b91-4eb7-93b7-6edf0c5dac93": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 65,
                "wisdom": 85,
                "speed": 35,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ff2ce933-7b91-4eb7-93b7-6edf0c5dac93",
            "cardId": "",
            "name": "Vasquin",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/CrGRRxb.png",
            "thumb": "https://i.imgur.com/XCGyW3u.jpeg"
        },
        "fb0a9171-b57a-40fc-a4e6-21ce8f3cf5d8": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 65,
                "wisdom": 85,
                "speed": 35,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "fb0a9171-b57a-40fc-a4e6-21ce8f3cf5d8",
            "cardId": "",
            "name": "Agitos",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/u7mi0x4.png",
            "thumb": ""
        },
        "60c9905e-e95b-440a-9798-ef9cbbd3b42e": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 65,
                "speed": 50,
                "power": 85,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "60c9905e-e95b-440a-9798-ef9cbbd3b42e",
            "cardId": "",
            "name": "Banshor",
            "chaoticId": "32",
            "cardImage": "https://i.imgur.com/F9fKKVM.png",
            "thumb": ""
        },
        "99bafbab-a91b-4dee-9ae8-060e9db7228e": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 25,
                "speed": 45,
                "power": 95,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "99bafbab-a91b-4dee-9ae8-060e9db7228e",
            "cardId": "",
            "name": "Cerbie",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/kQFWzli.png",
            "thumb": ""
        },
        "49207d9d-5773-4a24-8a83-f743eadf4fc2": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 20,
                "speed": 30,
                "power": 50,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "49207d9d-5773-4a24-8a83-f743eadf4fc2",
            "cardId": "",
            "name": "Ettala",
            "chaoticId": "36",
            "cardImage": "https://i.imgur.com/JyjrQpS.png",
            "thumb": ""
        },
        "47226202-3369-4e80-8273-9031792bf008": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 80,
                "speed": 35,
                "power": 25,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "47226202-3369-4e80-8273-9031792bf008",
            "cardId": "",
            "name": "Hoton",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/QzUJCQx.png",
            "thumb": ""
        },
        "f3804801-3500-4cb2-a9cd-0c0c7eac36a1": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 30,
                "wisdom": 55,
                "speed": 55,
                "power": 55,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "f3804801-3500-4cb2-a9cd-0c0c7eac36a1",
            "cardId": "",
            "name": "Mezzmarr",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/xIAM56A.png",
            "thumb": ""
        },
        "30dd5ee0-ee04-4047-865e-cd3ad8b9093b": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 35,
                "wisdom": 45,
                "speed": 65,
                "power": 60,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "30dd5ee0-ee04-4047-865e-cd3ad8b9093b",
            "cardId": "",
            "name": "Mishmoshmish",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/sMKsWZp.png",
            "thumb": ""
        },
        "e2637482-281b-41c4-ad6e-1eca74f5230d": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 45,
                "speed": 35,
                "power": 20,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e2637482-281b-41c4-ad6e-1eca74f5230d",
            "cardId": "",
            "name": "Mommark",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/og6ogoe.png",
            "thumb": ""
        },
        "4ac808d5-2a1a-4a72-8e77-7f55efba5fe9": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 30,
                "speed": 40,
                "power": 50,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "4ac808d5-2a1a-4a72-8e77-7f55efba5fe9",
            "cardId": "",
            "name": "Prantix",
            "chaoticId": "37",
            "cardImage": "https://i.imgur.com/TtAsSvB.png",
            "thumb": ""
        },
        "fdd540cd-2e80-4529-bca4-da6d85d43714": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 65,
                "speed": 60,
                "power": 20,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "fdd540cd-2e80-4529-bca4-da6d85d43714",
            "cardId": "",
            "name": "Quadore",
            "chaoticId": "38",
            "cardImage": "https://i.imgur.com/TqU7n8F.png",
            "thumb": ""
        },
        "3d87ac90-4093-4e3a-acdc-44ca422abf92": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 45,
                "speed": 50,
                "power": 80,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "3d87ac90-4093-4e3a-acdc-44ca422abf92",
            "cardId": "",
            "name": "Ulfhedinn",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/VwmkyFX.png",
            "thumb": ""
        },
        "0f2e0be0-ec59-4e97-b47d-84e70f42e7d2": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 25,
                "wisdom": 55,
                "speed": 45,
                "power": 30,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "0f2e0be0-ec59-4e97-b47d-84e70f42e7d2",
            "cardId": "",
            "name": "Abin-wor",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/ziBQOou.png",
            "thumb": ""
        },
        "11350bf8-fd0e-4f72-9e29-bc3aff638b1e": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 60,
                "wisdom": 55,
                "speed": 70,
                "power": 65,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "11350bf8-fd0e-4f72-9e29-bc3aff638b1e",
            "cardId": "",
            "name": "Blak'drin",
            "chaoticId": "9",
            "cardImage": "https://i.imgur.com/y5LIpCB.png",
            "thumb": ""
        },
        "9f849468-f45d-431a-8ffe-3b6a6658b83d": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 65,
                "wisdom": 80,
                "speed": 80,
                "power": 40,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "9f849468-f45d-431a-8ffe-3b6a6658b83d",
            "cardId": "",
            "name": "Ebkeex, Patchwork Minion",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/90kd7vL.png",
            "thumb": ""
        },
        "34ed25d6-0ac0-4702-a80c-339ce3ffe4c4": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 60,
                "speed": 35,
                "power": 45,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "34ed25d6-0ac0-4702-a80c-339ce3ffe4c4",
            "cardId": "",
            "name": "Nukasai",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/BQejFdY.png",
            "thumb": ""
        },
        "8df5134e-e1f5-43a2-90e9-784e069cdc2a": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 45,
                "speed": 45,
                "power": 35,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "8df5134e-e1f5-43a2-90e9-784e069cdc2a",
            "cardId": "",
            "name": "Gazarbash, Infecting Terraformer",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/wXTkXkw.png",
            "thumb": ""
        },
        "e442a891-3b80-4b1a-a077-d094e42a0815": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 30,
                "wisdom": 20,
                "speed": 20,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e442a891-3b80-4b1a-a077-d094e42a0815",
            "cardId": "",
            "name": "Khybon's Engineered Automaton",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/uiCIBKQ.png",
            "thumb": ""
        },
        "a1890fcf-9eee-40b6-81e6-b92d6d8c4598": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 45,
                "wisdom": 85,
                "speed": 85,
                "power": 30,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "a1890fcf-9eee-40b6-81e6-b92d6d8c4598",
            "cardId": "",
            "name": "Mommark, Clonemaster",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/MZmkY0S.png",
            "thumb": ""
        },
        "50476c85-70a7-4369-b918-fe8766ce96d9": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 45,
                "wisdom": 60,
                "speed": 60,
                "power": 35,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "50476c85-70a7-4369-b918-fe8766ce96d9",
            "cardId": "",
            "name": "Nis'dabba",
            "chaoticId": "10",
            "cardImage": "https://i.imgur.com/ihJwtpU.png",
            "thumb": ""
        },
        "4f99cc75-ef01-4d26-b030-9862bda96ee7": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 35,
                "wisdom": 45,
                "speed": 75,
                "power": 55,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "4f99cc75-ef01-4d26-b030-9862bda96ee7",
            "cardId": "",
            "name": "Farhkaj",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/XgOx0wD.png",
            "thumb": ""
        },
        "935694c9-ad31-4dea-af12-e8d2fa9b9784": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 35,
                "wisdom": 65,
                "speed": 65,
                "power": 55,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "935694c9-ad31-4dea-af12-e8d2fa9b9784",
            "cardId": "",
            "name": "Ulmar, Wavescrambler",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/tMXbj7x.png",
            "thumb": ""
        },
        "5d09bd6c-0b76-4310-9793-f200512d2c0d": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 35,
                "speed": 40,
                "power": 65,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "5d09bd6c-0b76-4310-9793-f200512d2c0d",
            "cardId": "",
            "name": "Tarteme, (Datamined DS)",
            "chaoticId": "",
            "cardImage": "https://i.imgur.com/mHhFdDv.png",
            "thumb": ""
        },
        "e0486fc6-a863-4cd0-9641-941700f8b761": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 60,
                "speed": 20,
                "power": 25,
                "energy": 25,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e0486fc6-a863-4cd0-9641-941700f8b761",
            "cardId": "",
            "name": "Kobarri, (Datamined DS)",
            "chaoticId": "",
            "cardImage": "https://i.imgur.com/VEV8kvq.png",
            "thumb": ""
        },
        "a1371450-9602-49ae-a5e1-2dcfdd16965e": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 35,
                "wisdom": 40,
                "speed": 70,
                "power": 60,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "a1371450-9602-49ae-a5e1-2dcfdd16965e",
            "cardId": "",
            "name": "Antidaeon, (Comic Con)",
            "chaoticId": "1",
            "cardImage": "https://i.imgur.com/OiBh0LM.png",
            "thumb": ""
        },
        "12135196-ffcf-48ed-9521-b4ec711e81b9": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 75,
                "speed": 60,
                "power": 30,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "12135196-ffcf-48ed-9521-b4ec711e81b9",
            "cardId": "",
            "name": "Epaluo, (Game Stop)",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/kbAFAQv.png",
            "thumb": ""
        },
        "0bcb1161-a995-4604-9412-5e438c39e1fd": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 30,
                "power": 85,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "0bcb1161-a995-4604-9412-5e438c39e1fd",
            "cardId": "",
            "name": "Ettala, Mind Controlled Brute (Best Buy)",
            "chaoticId": "18",
            "cardImage": "https://i.imgur.com/ngf8pxg.png",
            "thumb": ""
        },
        "7ab77d0f-5026-4b6b-aa18-73d9d24151bd": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 40,
                "wisdom": 100,
                "speed": 50,
                "power": 100,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "7ab77d0f-5026-4b6b-aa18-73d9d24151bd",
            "cardId": "",
            "name": "Gaffat-ra, (Pre-Release)",
            "chaoticId": "77",
            "cardImage": "https://i.imgur.com/31W0Ch2.png",
            "thumb": ""
        },
        "d2e6ccd7-2dbc-4943-a2bf-038409cb2062": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 50,
                "power": 50,
                "energy": 50,
                "fire": true,
                "water": true,
                "earth": true,
                "air": true
            },
            "id": "d2e6ccd7-2dbc-4943-a2bf-038409cb2062",
            "cardId": "",
            "name": "Heptadd, (2008 Hawaii Trade Conference)",
            "chaoticId": "P-004 ",
            "cardImage": "https://i.imgur.com/sZOgRgO.png",
            "thumb": ""
        },
        "2fc3cfad-ed8f-40f2-bd02-c641dbdd1f1d": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 30,
                "wisdom": 80,
                "speed": 40,
                "power": 20,
                "energy": 25,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "2fc3cfad-ed8f-40f2-bd02-c641dbdd1f1d",
            "cardId": "",
            "name": "Ikkatosh, The Aich King",
            "chaoticId": "79",
            "cardImage": "https://i.imgur.com/nHFvnv8.png",
            "thumb": ""
        },
        "4fd7c267-9628-4ee5-b2d4-79537dab12ab": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 30,
                "speed": 40,
                "power": 60,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "4fd7c267-9628-4ee5-b2d4-79537dab12ab",
            "cardId": "",
            "name": "Irsenog, (Target)",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/UDku5fD.png",
            "thumb": ""
        },
        "48b603ff-3b4e-45de-9b6d-8aac319140bc": {
            "tribe": "Danian",
            "stats": {
                "courage": 60,
                "wisdom": 40,
                "speed": 30,
                "power": 75,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "48b603ff-3b4e-45de-9b6d-8aac319140bc",
            "cardId": "",
            "name": "Kapalor, (Walmart)",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/qhzp3XE.png",
            "thumb": "https://i.imgur.com/ApjBoWu.jpeg"
        },
        "0f1511f0-4b84-4282-8929-9ae6a37da217": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 50,
                "wisdom": 70,
                "speed": 45,
                "power": 70,
                "energy": 60,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "0f1511f0-4b84-4282-8929-9ae6a37da217",
            "cardId": "",
            "name": "Nunk'worn, (Toys \"R\" Us)",
            "chaoticId": "80",
            "cardImage": "https://i.imgur.com/Y6bcoDw.png",
            "thumb": ""
        },
        "826116ff-380a-46a5-aa89-5722c1b7decc": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 70,
                "wisdom": 50,
                "speed": 40,
                "power": 50,
                "energy": 30,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "826116ff-380a-46a5-aa89-5722c1b7decc",
            "cardId": "",
            "name": "Opto, (Convention)",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/NTLMi4U.png",
            "thumb": ""
        },
        "deb0038b-ce54-4c97-915d-a7a190cffeff": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 85,
                "wisdom": 20,
                "speed": 80,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "deb0038b-ce54-4c97-915d-a7a190cffeff",
            "cardId": "",
            "name": "Prince Mudeenu, Champion of the Guard",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/I9dAY2w.png",
            "thumb": ""
        },
        "deace707-f87b-42ae-8d01-ff8c178d207b": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 85,
                "wisdom": 20,
                "speed": 80,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "deace707-f87b-42ae-8d01-ff8c178d207b",
            "cardId": "",
            "name": "Prince Mudeenu, Champion of the Guard (Online Promo)",
            "chaoticId": "\t68b",
            "cardImage": "https://i.imgur.com/Pc4Dbia.png",
            "thumb": ""
        },
        "1011a8f7-3575-4355-accd-97d6b64e82ae": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 40,
                "speed": 45,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "1011a8f7-3575-4355-accd-97d6b64e82ae",
            "cardId": "",
            "name": "Raimusa",
            "chaoticId": "2",
            "cardImage": "https://i.imgur.com/i3VOOP4.png",
            "thumb": ""
        },
        "be3c4661-96a7-4bd9-b0b7-c14dac2dc5ff": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 70,
                "wisdom": 40,
                "speed": 60,
                "power": 50,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "be3c4661-96a7-4bd9-b0b7-c14dac2dc5ff",
            "cardId": "",
            "name": "Simalin, (Retail Packs)",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/nodJzRN.png",
            "thumb": ""
        },
        "cbe19f1e-dcc6-4201-b571-4cb11362372e": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 70,
                "power": 90,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "cbe19f1e-dcc6-4201-b571-4cb11362372e",
            "cardId": "",
            "name": "Takinom, The Shadowknight (Perim Tour)",
            "chaoticId": "75",
            "cardImage": "https://i.imgur.com/miLkSow.png",
            "thumb": ""
        },
        "72304c5b-0586-4822-ae64-76870749a487": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 95,
                "speed": 35,
                "power": 75,
                "energy": 60,
                "fire": true,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "72304c5b-0586-4822-ae64-76870749a487",
            "cardId": "",
            "name": "Tangath Toborn, OverWorld General (Pre-Release)",
            "chaoticId": "70",
            "cardImage": "https://i.imgur.com/ZSD8w3Q.png",
            "thumb": ""
        },
        "8c7882a9-d192-4aa3-ae8e-04c71337ba2f": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 70,
                "wisdom": 45,
                "speed": 95,
                "power": 45,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "8c7882a9-d192-4aa3-ae8e-04c71337ba2f",
            "cardId": "",
            "name": "Kolmo, Purified (Pre-Release)",
            "chaoticId": "67",
            "cardImage": "https://i.imgur.com/yyKUnpD.png",
            "thumb": ""
        },
        "e70df11a-3ab8-45db-a91c-1402b46ac99b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 75,
                "power": 30,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e70df11a-3ab8-45db-a91c-1402b46ac99b",
            "cardId": "",
            "name": "Yokkis, Spooker",
            "chaoticId": "71b",
            "cardImage": "https://i.imgur.com/F3aFZkB.png",
            "thumb": ""
        },
        "d2c8f31d-95dc-4302-9184-525fd593b94e": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 25,
                "speed": 55,
                "power": 55,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "d2c8f31d-95dc-4302-9184-525fd593b94e",
            "cardId": "",
            "name": "Ario, (Misprint)",
            "chaoticId": "72",
            "cardImage": "",
            "thumb": "https://i.imgur.com/L9sm7hd.jpeg"
        },
        "568b990c-e902-4b33-b3b2-19f89395f7b2": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 50,
                "wisdom": 50,
                "speed": 50,
                "power": 50,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "568b990c-e902-4b33-b3b2-19f89395f7b2",
            "cardId": "",
            "name": "Heptadd, (Tin Misprint)",
            "chaoticId": "11",
            "cardImage": "https://i.imgur.com/HJgEnfx.png",
            "thumb": ""
        },
        "4960c957-081a-4b20-aeb7-fb0fe2aa3ae2": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 85,
                "speed": 35,
                "power": 75,
                "energy": 65,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "4960c957-081a-4b20-aeb7-fb0fe2aa3ae2",
            "cardId": "",
            "name": "Drazz, (Tangath Toborn In Training Stats Misprint)",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/Ah8kvNV.png",
            "thumb": ""
        },
        "c95cbba5-42ce-4cd5-b6f5-1ae5e3806807": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 100,
                "wisdom": 75,
                "speed": 40,
                "power": 50,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c95cbba5-42ce-4cd5-b6f5-1ae5e3806807",
            "cardId": "",
            "name": "Arctus, Heptadd's Squire (Pre-Release)",
            "chaoticId": "25",
            "cardImage": "https://i.imgur.com/4TaV6eY.jpg",
            "thumb": ""
        },
        "3a773082-79cc-4497-a445-4af6dd63b01f": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 35,
                "wisdom": 70,
                "speed": 45,
                "power": 65,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "3a773082-79cc-4497-a445-4af6dd63b01f",
            "cardId": "",
            "name": "Blügon, (New York Comic Con)",
            "chaoticId": "34",
            "cardImage": "https://i.imgur.com/4lAzdnK.jpg",
            "thumb": ""
        },
        "753729d8-e738-4df7-84dc-f55ff8a89d4d": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 25,
                "speed": 50,
                "power": 90,
                "energy": 70,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "753729d8-e738-4df7-84dc-f55ff8a89d4d",
            "cardId": "",
            "name": "Rothar, (New York Comic Con)",
            "chaoticId": "72",
            "cardImage": "https://i.imgur.com/weA71Nj.png",
            "thumb": ""
        },
        "c9b4acc9-2bdb-4e0d-8299-cdddd793c17b": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 15,
                "speed": 65,
                "power": 85,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c9b4acc9-2bdb-4e0d-8299-cdddd793c17b",
            "cardId": "",
            "name": "Barath Beyond",
            "chaoticId": "29",
            "cardImage": "https://i.imgur.com/5qWLq8W.png",
            "thumb": ""
        },
        "c249693d-4602-44c2-b148-8d61e5cef743": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 35,
                "wisdom": 60,
                "speed": 25,
                "power": 40,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "c249693d-4602-44c2-b148-8d61e5cef743",
            "cardId": "",
            "name": "Blazier",
            "chaoticId": "3",
            "cardImage": "https://i.imgur.com/uEWG2X3.png",
            "thumb": ""
        },
        "a509861d-2b73-4bfb-ab56-aec90ec2bf4f": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 150,
                "wisdom": 50,
                "speed": 150,
                "power": 75,
                "energy": 70,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "a509861d-2b73-4bfb-ab56-aec90ec2bf4f",
            "cardId": "",
            "name": "Blazvatan, The Epic Warbeast",
            "chaoticId": "21",
            "cardImage": "https://i.imgur.com/MlryCnD.png",
            "thumb": "https://i.imgur.com/EAKoLOY.jpeg"
        },
        "12c2a623-5b48-4798-8724-16a1c5611972": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 45,
                "wisdom": 85,
                "speed": 40,
                "power": 85,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "12c2a623-5b48-4798-8724-16a1c5611972",
            "cardId": "",
            "name": "Borth-Majar",
            "chaoticId": "30",
            "cardImage": "https://i.imgur.com/XExunLQ.png",
            "thumb": ""
        },
        "cde186e9-5115-4622-b0ab-265554b581c5": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 95,
                "wisdom": 70,
                "speed": 60,
                "power": 90,
                "energy": 70,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "cde186e9-5115-4622-b0ab-265554b581c5",
            "cardId": "",
            "name": "Chaor",
            "chaoticId": "31",
            "cardImage": "https://i.imgur.com/ZrcPDxM.png",
            "thumb": ""
        },
        "9487d0d0-60ec-4a4f-9024-b446930d6fc1": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 40,
                "speed": 25,
                "power": 45,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "9487d0d0-60ec-4a4f-9024-b446930d6fc1",
            "cardId": "",
            "name": "Crawsectus",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/5XeD6Rc.png",
            "thumb": ""
        },
        "3ac38dc1-86ec-4ccf-a119-e05339b425d2": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 80,
                "speed": 50,
                "power": 20,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "3ac38dc1-86ec-4ccf-a119-e05339b425d2",
            "cardId": "",
            "name": "Enre-hep",
            "chaoticId": "24",
            "cardImage": "https://i.imgur.com/kEA9PkS.png",
            "thumb": ""
        },
        "c81ce042-ffa8-4ac7-b9ff-c025c7443d65": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 15,
                "wisdom": 15,
                "speed": 15,
                "power": 15,
                "energy": 15,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c81ce042-ffa8-4ac7-b9ff-c025c7443d65",
            "cardId": "",
            "name": "Fivarth",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/KWEFaJY.png",
            "thumb": ""
        },
        "478eec86-95d2-44c4-b844-eed766fa53e1": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 50,
                "wisdom": 30,
                "speed": 65,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "478eec86-95d2-44c4-b844-eed766fa53e1",
            "cardId": "",
            "name": "Gnarlus",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/oIddR5f.png",
            "thumb": "https://i.imgur.com/RMJWNqR.jpeg"
        },
        "2fad5534-a429-4b16-b431-6ab2372743a5": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 50,
                "wisdom": 40,
                "speed": 55,
                "power": 55,
                "energy": 65,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "2fad5534-a429-4b16-b431-6ab2372743a5",
            "cardId": "",
            "name": "Hammerdoom Chantcaller",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/okebcZT.png",
            "thumb": ""
        },
        "f9eba150-667b-4f08-a50d-1b46408c371b": {
            "tribe": "Danian",
            "stats": {
                "courage": 70,
                "wisdom": 55,
                "speed": 55,
                "power": 40,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "f9eba150-667b-4f08-a50d-1b46408c371b",
            "cardId": "",
            "name": "Hammerdoom Chantcaller, Assimilated",
            "chaoticId": "16",
            "cardImage": "https://i.imgur.com/MJeUSCe.png",
            "thumb": ""
        },
        "2b4afb64-9489-4ca1-8827-1b7ddc213ba7": {
            "tribe": "Danian",
            "stats": {
                "courage": 50,
                "wisdom": 65,
                "speed": 25,
                "power": 65,
                "energy": 55,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "2b4afb64-9489-4ca1-8827-1b7ddc213ba7",
            "cardId": "",
            "name": "Illexia, The Danian Queen (Misprint)",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/NAUWQvv.png",
            "thumb": ""
        },
        "7758f735-e700-4321-946f-1ea25dad20ef": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 40,
                "speed": 55,
                "power": 35,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "7758f735-e700-4321-946f-1ea25dad20ef",
            "cardId": "",
            "name": "Intress",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/Tsxz1hW.png",
            "thumb": ""
        },
        "ea6a8e2e-b694-4555-add9-1d3b823f2282": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 25,
                "wisdom": 25,
                "speed": 25,
                "power": 25,
                "energy": 50,
                "fire": true,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "ea6a8e2e-b694-4555-add9-1d3b823f2282",
            "cardId": "",
            "name": "Iparu",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/mT1vv4o.png",
            "thumb": ""
        },
        "5ae9c0e6-fc2d-4c60-996b-e2b4a19266dc": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 40,
                "speed": 40,
                "power": 30,
                "energy": 35,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "5ae9c0e6-fc2d-4c60-996b-e2b4a19266dc",
            "cardId": "",
            "name": "Karraba",
            "chaoticId": "6",
            "cardImage": "https://i.imgur.com/2IVJz6m.png",
            "thumb": ""
        },
        "9d3ea81f-4886-4b4b-b493-b06a1d6aba83": {
            "tribe": "Danian",
            "stats": {
                "courage": 65,
                "wisdom": 65,
                "speed": 25,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "9d3ea81f-4886-4b4b-b493-b06a1d6aba83",
            "cardId": "",
            "name": "Khritlaan",
            "chaoticId": "26",
            "cardImage": "https://i.imgur.com/og6KPky.png",
            "thumb": ""
        },
        "a9cdeb8d-bff1-492d-9b4a-16d923026b66": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 65,
                "speed": 60,
                "power": 35,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "a9cdeb8d-bff1-492d-9b4a-16d923026b66",
            "cardId": "",
            "name": "Kinnianne, Ambassador to the Mipedians",
            "chaoticId": "7",
            "cardImage": "https://i.imgur.com/ME6XgRE.png",
            "thumb": ""
        },
        "9a035728-6252-4807-b429-5d70b81c01fc": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 50,
                "speed": 40,
                "power": 55,
                "energy": 65,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "9a035728-6252-4807-b429-5d70b81c01fc",
            "cardId": "",
            "name": "Kolmo",
            "chaoticId": "33",
            "cardImage": "https://i.imgur.com/nVTONJv.png",
            "thumb": ""
        },
        "a66547f1-dcd0-498d-909a-43f675f54e26": {
            "tribe": "Danian",
            "stats": {
                "courage": 75,
                "wisdom": 30,
                "speed": 60,
                "power": 70,
                "energy": 60,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "a66547f1-dcd0-498d-909a-43f675f54e26",
            "cardId": "",
            "name": "Kolmo, Assimilated",
            "chaoticId": "17",
            "cardImage": "https://i.imgur.com/WQxTbK9.png",
            "thumb": ""
        },
        "a19b273c-ba38-4898-918c-1e6a0b7aa24f": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 30,
                "wisdom": 50,
                "speed": 20,
                "power": 15,
                "energy": 20,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "a19b273c-ba38-4898-918c-1e6a0b7aa24f",
            "cardId": "",
            "name": "Kopond",
            "chaoticId": "12",
            "cardImage": "https://i.imgur.com/v2Yd3OX.png",
            "thumb": ""
        },
        "f08c9e1d-82dc-4643-912a-d134310675e5": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 55,
                "wisdom": 60,
                "speed": 35,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "f08c9e1d-82dc-4643-912a-d134310675e5",
            "cardId": "",
            "name": "Lomma",
            "chaoticId": "4",
            "cardImage": "https://i.imgur.com/uYSR3xh.png",
            "thumb": ""
        },
        "cc478dfa-e27a-4247-a4eb-2d0bf59a5ef3": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 75,
                "wisdom": 50,
                "speed": 95,
                "power": 115,
                "energy": 65,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "cc478dfa-e27a-4247-a4eb-2d0bf59a5ef3",
            "cardId": "",
            "name": "Lord Van Bloot",
            "chaoticId": "42",
            "cardImage": "https://i.imgur.com/w7EpSme.png",
            "thumb": ""
        },
        "8223f68f-34c5-4e59-ba76-72cd58f8105a": {
            "tribe": "Danian",
            "stats": {
                "courage": 30,
                "wisdom": 70,
                "speed": 30,
                "power": 35,
                "energy": 25,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "8223f68f-34c5-4e59-ba76-72cd58f8105a",
            "cardId": "",
            "name": "Lore",
            "chaoticId": "66",
            "cardImage": "https://i.imgur.com/XUpr5zm.png",
            "thumb": ""
        },
        "4045361c-d1a6-4427-9581-9010aeddcadc": {
            "tribe": "Danian",
            "stats": {
                "courage": 35,
                "wisdom": 65,
                "speed": 25,
                "power": 60,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4045361c-d1a6-4427-9581-9010aeddcadc",
            "cardId": "",
            "name": "Mahrrant",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/WuIu8ZL.png",
            "thumb": ""
        },
        "fd1dc92b-1bf8-4e8f-a589-5095a5ebf377": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 100,
                "wisdom": 80,
                "speed": 50,
                "power": 65,
                "energy": 60,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "fd1dc92b-1bf8-4e8f-a589-5095a5ebf377",
            "cardId": "",
            "name": "Maxxor",
            "chaoticId": "15",
            "cardImage": "https://i.imgur.com/07QFYyO.png",
            "thumb": ""
        },
        "0f442688-d9e3-4dcb-9ea5-03440cc5dcea": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 70,
                "speed": 30,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "0f442688-d9e3-4dcb-9ea5-03440cc5dcea",
            "cardId": "",
            "name": "Olkiex",
            "chaoticId": "8",
            "cardImage": "https://i.imgur.com/JctIDWG.png",
            "thumb": ""
        },
        "fbdc5fe5-e63c-4205-86f3-a76c8adb251b": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 55,
                "wisdom": 60,
                "speed": 50,
                "power": 65,
                "energy": 45,
                "fire": false,
                "water": true,
                "earth": false,
                "air": false
            },
            "id": "fbdc5fe5-e63c-4205-86f3-a76c8adb251b",
            "cardId": "",
            "name": "Phelphor",
            "chaoticId": "13",
            "cardImage": "https://i.imgur.com/eQ9E2om.png",
            "thumb": ""
        },
        "aaaff640-f1f8-491b-932b-566b1bea3517": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 60,
                "wisdom": 20,
                "speed": 65,
                "power": 75,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "aaaff640-f1f8-491b-932b-566b1bea3517",
            "cardId": "",
            "name": "Prince Mudeenu, (Dardemus Stats Misprint)",
            "chaoticId": "77",
            "cardImage": "https://i.imgur.com/KOtibqe.png",
            "thumb": "https://i.imgur.com/eOG8qQy.jpeg"
        },
        "1232aa68-6b5a-42cd-9993-237243c038ba": {
            "tribe": "Danian",
            "stats": {
                "courage": 35,
                "wisdom": 50,
                "speed": 25,
                "power": 65,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "1232aa68-6b5a-42cd-9993-237243c038ba",
            "cardId": "",
            "name": "Ramarhvir, The Danian Hivebringer",
            "chaoticId": "28",
            "cardImage": "https://i.imgur.com/RVC3iiN.png",
            "thumb": ""
        },
        "de7a28e8-0e6f-4b1f-9ac2-2810f1616388": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 60,
                "wisdom": 70,
                "speed": 40,
                "power": 20,
                "energy": 40,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "de7a28e8-0e6f-4b1f-9ac2-2810f1616388",
            "cardId": "",
            "name": "Raznus, Ambassador to the Danians",
            "chaoticId": "5",
            "cardImage": "https://i.imgur.com/TExaXHs.png",
            "thumb": ""
        },
        "3e0b6f85-f514-448e-9e5c-1d6b869313db": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 45,
                "wisdom": 40,
                "speed": 45,
                "power": 50,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "3e0b6f85-f514-448e-9e5c-1d6b869313db",
            "cardId": "",
            "name": "Ribbian",
            "chaoticId": "35",
            "cardImage": "https://i.imgur.com/jLhSZgs.png",
            "thumb": ""
        },
        "b79634cd-ee3b-4f77-ae3a-662b5a6b7bac": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 60,
                "wisdom": 20,
                "speed": 90,
                "power": 65,
                "energy": 40,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "b79634cd-ee3b-4f77-ae3a-662b5a6b7bac",
            "cardId": "",
            "name": "Takinom",
            "chaoticId": "52",
            "cardImage": "https://i.imgur.com/8dxKKq4.png",
            "thumb": ""
        },
        "1fdbefa6-c012-41d8-8565-3893c90f6a2c": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 40,
                "wisdom": 40,
                "speed": 30,
                "power": 45,
                "energy": 30,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "1fdbefa6-c012-41d8-8565-3893c90f6a2c",
            "cardId": "",
            "name": "Tangath Toborn",
            "chaoticId": "22",
            "cardImage": "https://i.imgur.com/wuLEJ8I.png",
            "thumb": ""
        },
        "45409388-8b43-422b-b964-a8656337abb8": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 40,
                "wisdom": 70,
                "speed": 35,
                "power": 20,
                "energy": 25,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "45409388-8b43-422b-b964-a8656337abb8",
            "cardId": "",
            "name": "Ulmar",
            "chaoticId": "54",
            "cardImage": "https://i.imgur.com/RExY8uV.png",
            "thumb": ""
        },
        "61f6d5b0-58c6-47e1-86b7-585916c104c7": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 20,
                "wisdom": 20,
                "speed": 20,
                "power": 20,
                "energy": 50,
                "fire": false,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "61f6d5b0-58c6-47e1-86b7-585916c104c7",
            "cardId": "",
            "name": "Yokkis",
            "chaoticId": "27",
            "cardImage": "https://i.imgur.com/ornGcud.png",
            "thumb": ""
        },
        "e3f2a91c-adee-4218-8be3-6c76cfaca1fc": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 90,
                "wisdom": 70,
                "speed": 60,
                "power": 95,
                "energy": 70,
                "fire": true,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e3f2a91c-adee-4218-8be3-6c76cfaca1fc",
            "cardId": "",
            "name": "Chaor (Alpha)",
            "chaoticId": "210",
            "cardImage": "",
            "thumb": ""
        },
        "044ce57c-00d2-4f49-90b2-cdd3967a0e50": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 75,
                "wisdom": 75,
                "speed": 100,
                "power": 90,
                "energy": 50,
                "fire": true,
                "water": true,
                "earth": true,
                "air": true
            },
            "id": "044ce57c-00d2-4f49-90b2-cdd3967a0e50",
            "cardId": "",
            "name": "Heptadd (Alpha)",
            "chaoticId": "210",
            "cardImage": "",
            "thumb": ""
        },
        "395072b0-7293-46e7-a760-351d32a4baf7": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 100,
                "wisdom": 60,
                "speed": 75,
                "power": 65,
                "energy": 60,
                "fire": false,
                "water": true,
                "earth": true,
                "air": false
            },
            "id": "395072b0-7293-46e7-a760-351d32a4baf7",
            "cardId": "",
            "name": "Intress (Alpha)",
            "chaoticId": "210",
            "cardImage": "",
            "thumb": ""
        },
        "2159760f-8dc3-45dd-b7dc-6257f85380e4": {
            "tribe": "Danian",
            "stats": {
                "courage": 45,
                "wisdom": 75,
                "speed": 30,
                "power": 30,
                "energy": 45,
                "fire": false,
                "water": false,
                "earth": true,
                "air": true
            },
            "id": "2159760f-8dc3-45dd-b7dc-6257f85380e4",
            "cardId": "",
            "name": "Lore (Alpha), Danian Shaman Commander Variant",
            "chaoticId": "210",
            "cardImage": "",
            "thumb": ""
        },
        "3a00f77d-0c64-4b47-b0ab-37b9d5815bdf": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 80,
                "wisdom": 80,
                "speed": 70,
                "power": 90,
                "energy": 70,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "3a00f77d-0c64-4b47-b0ab-37b9d5815bdf",
            "cardId": "",
            "name": "Maxxor (Alpha)",
            "chaoticId": "210",
            "cardImage": "",
            "thumb": ""
        },
        "0f7f495d-4dea-4752-99a2-45a8fdffd633": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 35,
                "wisdom": 50,
                "speed": 50,
                "power": 30,
                "energy": 20,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "0f7f495d-4dea-4752-99a2-45a8fdffd633",
            "cardId": "",
            "name": "Siado (Alpha), Invisible Striker",
            "chaoticId": "210",
            "cardImage": "",
            "thumb": ""
        },
        "4fbe1984-9823-4396-9c67-a9837e8879b3": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 70,
                "wisdom": 45,
                "speed": 105,
                "power": 80,
                "energy": 40,
                "fire": true,
                "water": false,
                "earth": true,
                "air": false
            },
            "id": "4fbe1984-9823-4396-9c67-a9837e8879b3",
            "cardId": "",
            "name": "Takinom (Alpha)",
            "chaoticId": "210",
            "cardImage": "",
            "thumb": ""
        },
        "e3176313-7f73-4bbe-819e-21426d20ca89": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 35,
                "wisdom": 45,
                "speed": 40,
                "power": 35,
                "energy": 20,
                "fire": false,
                "water": false,
                "earth": false,
                "air": true
            },
            "id": "e3176313-7f73-4bbe-819e-21426d20ca89",
            "cardId": "",
            "name": "Zhade (Alpha), Invisible Stalker Variant",
            "chaoticId": "210",
            "cardImage": "",
            "thumb": ""
        },
        "91f343cf-4b3f-4bd6-9d6c-3930388e7f1f": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "91f343cf-4b3f-4bd6-9d6c-3930388e7f1f",
            "cardId": "",
            "name": "(Unused) Aah'terai",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "59019bdd-cf3b-4258-ab6e-6aff75ae8b63": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "59019bdd-cf3b-4258-ab6e-6aff75ae8b63",
            "cardId": "",
            "name": "(Unused) Ahnem",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "1047416c-6009-4313-b32b-10d01a523a07": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "1047416c-6009-4313-b32b-10d01a523a07",
            "cardId": "",
            "name": "(Unused) Aisgur",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "18b344cd-4a5d-4d42-bc13-a8e061e8226d": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "18b344cd-4a5d-4d42-bc13-a8e061e8226d",
            "cardId": "",
            "name": "(Unused) Akreen",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "d0526c1b-8a91-4df0-9ecb-8a3186a05a9a": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "d0526c1b-8a91-4df0-9ecb-8a3186a05a9a",
            "cardId": "",
            "name": "(Unused) Akwi",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "021bdc7d-e0ad-40a0-935c-92f064d8f780": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "021bdc7d-e0ad-40a0-935c-92f064d8f780",
            "cardId": "",
            "name": "(Unused) Akwi",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "578be658-9622-4742-9857-169c03bfd77c": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "578be658-9622-4742-9857-169c03bfd77c",
            "cardId": "",
            "name": "(Unused) Aliecis",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "77d3787a-fbbf-477a-b4d8-bd1d3773b7da": {
            "tribe": "Danian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "77d3787a-fbbf-477a-b4d8-bd1d3773b7da",
            "cardId": "",
            "name": "(Unused) Aztrolar",
            "chaoticId": "",
            "cardImage": "",
            "thumb": "https://i.imgur.com/1pr6q6P.jpeg"
        },
        "7d2eabef-416b-45d9-8eaf-9d86f6b8fcac": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "7d2eabef-416b-45d9-8eaf-9d86f6b8fcac",
            "cardId": "",
            "name": "(Unused) Blügon",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "00820356-0246-4028-b7ad-04e5c46ddb59": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "00820356-0246-4028-b7ad-04e5c46ddb59",
            "cardId": "",
            "name": "(Unused) Borth-Majar",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "f0640eea-63c4-4654-8e4c-0526287ad44f": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "f0640eea-63c4-4654-8e4c-0526287ad44f",
            "cardId": "",
            "name": "(Unused) Chaor",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "c2c0869d-a707-442c-a9aa-6b05897e1727": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c2c0869d-a707-442c-a9aa-6b05897e1727",
            "cardId": "",
            "name": "(Unused) Cirileth",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "f34e5783-ddce-4067-b6b4-0703907b95e7": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "f34e5783-ddce-4067-b6b4-0703907b95e7",
            "cardId": "",
            "name": "(Unused) Deehna",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "4c50520d-1361-4141-acff-11fa89d871a3": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4c50520d-1361-4141-acff-11fa89d871a3",
            "cardId": "",
            "name": "(Unused) Dractyl",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "c67d88b9-01bd-4f05-9bf7-030837bc7f73": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "c67d88b9-01bd-4f05-9bf7-030837bc7f73",
            "cardId": "",
            "name": "(Unused) Eehrin",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "7cf47f2c-bf51-4a8f-9cee-bedca4300475": {
            "tribe": "Danian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "7cf47f2c-bf51-4a8f-9cee-bedca4300475",
            "cardId": "",
            "name": "(Unused) Ekuud",
            "chaoticId": "",
            "cardImage": "",
            "thumb": "https://i.imgur.com/dN30Bwf.jpeg"
        },
        "18ba1efc-3ff4-43cc-a7e3-d6560072811b": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "18ba1efc-3ff4-43cc-a7e3-d6560072811b",
            "cardId": "",
            "name": "(Unused) Elira",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "99e9e294-25d9-430b-be96-315c9ae0f660": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "99e9e294-25d9-430b-be96-315c9ae0f660",
            "cardId": "",
            "name": "(Unused) Farkaj",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "707b2e25-7807-4588-8f7c-3ccc074a70be": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "707b2e25-7807-4588-8f7c-3ccc074a70be",
            "cardId": "",
            "name": "(Unused) Frafdo",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "776dd499-61da-41fd-8360-5a875967e6b8": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "776dd499-61da-41fd-8360-5a875967e6b8",
            "cardId": "",
            "name": "(Unused) Ganassaran",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "04334561-260a-4be6-aa0b-947c1abec3df": {
            "tribe": "Danian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "04334561-260a-4be6-aa0b-947c1abec3df",
            "cardId": "",
            "name": "(Unused) Getan",
            "chaoticId": "",
            "cardImage": "",
            "thumb": "https://i.imgur.com/DE4UllY.jpeg"
        },
        "45f7fbf3-505f-4ecc-967e-e7a877527c8a": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "45f7fbf3-505f-4ecc-967e-e7a877527c8a",
            "cardId": "",
            "name": "(Unused) Guernath",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "1d9cc4df-5805-47ea-a0ba-3c68a6a3c12f": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "1d9cc4df-5805-47ea-a0ba-3c68a6a3c12f",
            "cardId": "",
            "name": "(Unused) H'earring",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "07d52040-5cb8-4c95-b8b9-f154f62f332f": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "07d52040-5cb8-4c95-b8b9-f154f62f332f",
            "cardId": "",
            "name": "(Unused) Iflar",
            "chaoticId": "",
            "cardImage": "",
            "thumb": "https://i.imgur.com/0NcBK8w.jpeg"
        },
        "00ab823a-3dc6-45be-b995-f6bf5a866b77": {
            "tribe": "Danian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "00ab823a-3dc6-45be-b995-f6bf5a866b77",
            "cardId": "",
            "name": "(Unused) Illexia, Elder of the Nest",
            "chaoticId": "",
            "cardImage": "",
            "thumb": "https://i.imgur.com/2V1ycQD.jpeg"
        },
        "0f494b8d-6f4c-4a9d-9941-4ba80faf3f5e": {
            "tribe": "Danian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "0f494b8d-6f4c-4a9d-9941-4ba80faf3f5e",
            "cardId": "",
            "name": "(Unused) Kaplor",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "e169ad21-ae88-4334-bd90-66c051a63217": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e169ad21-ae88-4334-bd90-66c051a63217",
            "cardId": "",
            "name": "(Unused) Kienrah",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "e1a768da-fecd-4afd-b1b9-58c5e35df367": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e1a768da-fecd-4afd-b1b9-58c5e35df367",
            "cardId": "",
            "name": "(Unused) Kemosh",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "50ed5f93-cbe8-42de-b494-fef595c41b8b": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "50ed5f93-cbe8-42de-b494-fef595c41b8b",
            "cardId": "",
            "name": "(Unused) Kughar",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "b6354357-bb0b-4da9-843d-8b1b667d417a": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "b6354357-bb0b-4da9-843d-8b1b667d417a",
            "cardId": "",
            "name": "(Unused) Lord Van Bloot",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "19ad7c01-b7fa-4929-9b60-efb6495a82a0": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "19ad7c01-b7fa-4929-9b60-efb6495a82a0",
            "cardId": "",
            "name": "(Unused) Lujah",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "3ee06543-7744-447b-91f4-e7e6c3656484": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "3ee06543-7744-447b-91f4-e7e6c3656484",
            "cardId": "",
            "name": "(Unused) Marqui",
            "chaoticId": "",
            "cardImage": "",
            "thumb": "https://i.imgur.com/eWOQu5Y.jpeg"
        },
        "b5092254-2df4-4258-80a6-664a410771e2": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "b5092254-2df4-4258-80a6-664a410771e2",
            "cardId": "",
            "name": "(Unused) Mhook",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "10c1c3dc-49dd-4417-ae4e-c996aee3ab2f": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "10c1c3dc-49dd-4417-ae4e-c996aee3ab2f",
            "cardId": "",
            "name": "(Unused) Nidding",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "af19f6ac-7856-4776-87c2-c16d69c58995": {
            "tribe": "M'arrillian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "af19f6ac-7856-4776-87c2-c16d69c58995",
            "cardId": "",
            "name": "(Unused) Phelphor",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "268ac0b5-bc7a-443c-82e8-a1970cd95491": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "268ac0b5-bc7a-443c-82e8-a1970cd95491",
            "cardId": "",
            "name": "(Unused) Prince Mudeenu, Vassal of the King",
            "chaoticId": "",
            "cardImage": "",
            "thumb": "https://i.imgur.com/sBlyUAa.jpeg"
        },
        "8f423917-f2ba-4871-918d-5537f339d275": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "8f423917-f2ba-4871-918d-5537f339d275",
            "cardId": "",
            "name": "(Unused) Pryitheon",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "eef84e96-ea82-4f29-b145-6a5141e6c4d5": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "eef84e96-ea82-4f29-b145-6a5141e6c4d5",
            "cardId": "",
            "name": "(Unused) Raimusa",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "610506a7-5313-4c44-b5be-37470efdc885": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "610506a7-5313-4c44-b5be-37470efdc885",
            "cardId": "",
            "name": "(Unused) Raimusa 2",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "f1bb20b4-4ca1-4233-9053-6259d6d2801c": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "f1bb20b4-4ca1-4233-9053-6259d6d2801c",
            "cardId": "",
            "name": "(Unused) Rarran",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "0b582149-3ed6-4c0b-ad6c-53abe5b7ed05": {
            "tribe": "OverWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "0b582149-3ed6-4c0b-ad6c-53abe5b7ed05",
            "cardId": "",
            "name": "(Unused) Rhaden",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "4d6c36bc-2b94-4c61-a32c-94cd16a82ef2": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "4d6c36bc-2b94-4c61-a32c-94cd16a82ef2",
            "cardId": "",
            "name": "(Unused) Saido",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "e79f7a6f-f20f-43c2-8d7e-0cebaa3fbd79": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "e79f7a6f-f20f-43c2-8d7e-0cebaa3fbd79",
            "cardId": "",
            "name": "(Unused) Sarhbat",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "decb5966-af6d-4de8-8d9e-79a16e04e894": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "decb5966-af6d-4de8-8d9e-79a16e04e894",
            "cardId": "",
            "name": "(Unused) Steem",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "f515071e-d3c5-41d6-b5dc-0daae9e4726f": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "f515071e-d3c5-41d6-b5dc-0daae9e4726f",
            "cardId": "",
            "name": "(Unused) Theb-Saar, King of Mipedim",
            "chaoticId": "",
            "cardImage": "",
            "thumb": "https://i.imgur.com/IlV5EZ1.jpeg"
        },
        "cf8b8933-855e-43ea-8851-15e099afeabc": {
            "tribe": "Mipedian",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "cf8b8933-855e-43ea-8851-15e099afeabc",
            "cardId": "",
            "name": "(Unused) Ynlee",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        },
        "ddb64c0a-6d7e-40fb-9a03-ed9664d291d2": {
            "tribe": "UnderWorld",
            "stats": {
                "courage": 0,
                "wisdom": 0,
                "speed": 0,
                "power": 0,
                "energy": 0,
                "fire": false,
                "water": false,
                "earth": false,
                "air": false
            },
            "id": "ddb64c0a-6d7e-40fb-9a03-ed9664d291d2",
            "cardId": "",
            "name": "(Unused) Zalvar",
            "chaoticId": "",
            "cardImage": "",
            "thumb": ""
        }
    };

export default Creatures;