import { CHEST_LIST, ARM_LIST ,WEAPON_LIST ,BACK_LIST ,BELT_LIST ,HEAD_LIST ,LEGS_LIST ,SHOES_LIST, 
    CHEST_ACTIVE, ARMS_ACTIVE, WEAPON_ACTIVE, BACK_ACTIVE, BELT_ACTIVE, HEAD_ACTIVE, LEGS_ACTIVE, SHOES_ACTIVE } from "./types";

const initialState = {
    chest: [
        {id: 1, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1275/image_trimmed/582015e10eff7709a4c6bd6ad5f2ebe4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1275/image/e5ec214d298a856f0db353eeede5d521.png"},
        {id: 2, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1123/image_trimmed/b259b8aff96cf9299e4b5da796cf52d7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1123/image/337d08ef52578b002d860bfbc77c8aee.png"},
        {id: 3, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1135/image_trimmed/e1260ed80ddacefb15be4dc45a4c9748.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1135/image/5528f1280e506b30ef09843f7cf7ca7c.png"},
        {id: 4, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1147/image_trimmed/bdcefbb3d7a2e74fd54ea35831112bd4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1147/image/4a21c7b683fe205e9a5d15e22e02d51c.png"},
        {id: 5, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1157/image_trimmed/d39c13018ea14a4de354db311c098073.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1157/image/31a73b2284cb5056835f40628c752b53.png"},
        {id: 6, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1175/image_trimmed/9a033957d3866f2ef75e3df4912f0c1c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1175/image/ddaec3cff10bc1f5939d5e2fdc11ff68.png"},
        {id: 7, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1197/image_trimmed/15dd4e3737507c6288bbc93e3cd2e2c7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1197/image/6cd9f4c0f06b5a28f4f0e7e516bd7e5e.png"},
        {id: 8, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1207/image_trimmed/4d05180dd844e67a9cad6f9c11e6c31f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1207/image/2e3938c38460bc13f329b6aa6dfad555.png"},
        {id: 9, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1217/image_trimmed/88f9d2f11be1b269f6f11ab8fc858aa4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1217/image/0b553ad68cd1eec84544adc61cd448dd.png"},
        {id: 11, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1229/image_trimmed/da071b5d8ee74b1f02492b068ce4cabe.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1229/image/e939ee37ab49897df538ef0fc38644d7.png"},
        {id: 12, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1239/image_trimmed/eaf72f5d232ca5afab0504e92c68dc83.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1239/image/3344537ca451e307d42b22ca884a1843.png"},
        {id: 13, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1251/image_trimmed/3db118ab1ed75bbbc83ff9b0ab3747d4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1251/image/013538bb54d389fad1c921b8882fec83.png"},
        {id: 14, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1263/image_trimmed/56b694e386a2128beb3fed3647797523.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1263/image/65a391e37f7ed1fba145580f87a5d511.png"},
        {id: 15, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1285/image_trimmed/bc3b495217e0684782b56d5e9320bca1.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1285/image/871dae1f73f841c089544aff445bba4a.png"},
        {id: 16, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1297/image_trimmed/c6ece538b359bde252f3206a64ebf58c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1297/image/a03dfa9820e1ddbce3d4c678f7b376b8.png"},
        {id: 17, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1307/image_trimmed/0a2c9c55fa017f296fde21a00748ac7e.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1307/image/36d0784c17c278beb7a8caff2accf72f.png"},
        {id: 18, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1319/image_trimmed/e5794910ed14ea517736103ebcb46e2c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1319/image/0bfac125ce7e77b62ca197b978e2b6ef.png"},
        {id: 19, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1327/image_trimmed/c580e9f87c18765917b9d5b316bb3eb7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1327/image/7a4a733bd68a898e674366e1e674ace4.png"},
        {id: 20, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1339/image_trimmed/722f24dc6cee91cf4160d67ff03c209a.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1339/image/f8fe666659f0e97564cee9305071e767.png"},
        {id: 21, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1351/image_trimmed/dca515fd689f2f668590bb5601d9a623.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1351/image/01cfb21b477e7e227ae65a020add1a89.png"},
        {id: 22, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1359/image_trimmed/0aa845f225243e36a57c5cf1c1a8be86.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1359/image/2b105e7d11b4c86afe7706258c696029.png"},
        {id: 23, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1369/image_trimmed/560c2897fba17c79b6498e0281139a38.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1369/image/1b09eab2697deecba5a62aa5193061de.png"},
        {id: 24, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1379/image_trimmed/81f5774b9322261827c6711721b76f83.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1379/image/76b2ee9c4f637029bc1be4b56b73c3d4.png"},
        {id: 25, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1391/image_trimmed/551340f2fd8c3cad296f2af6f74b8bea.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1391/image/f13299d49c8bdccd540a7335fd8c389f.png"},
        {id: 26, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5389/image_trimmed/628e7c16c23e681ee19755e607e0f6ec.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5389/image/75c0241ab87935ab11c10dc9faf6db0e.png"},
        {id: 27, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5404/image_trimmed/410f3a595207c83559428a88880d95ad.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5404/image/25d8621feb8f4ccbe4b95f84f036a5ad.png"},
        {id: 28, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5408/image_trimmed/4a65434b35296fe8ac76fce5054952e0.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5408/image/5d650f21b7a2452c9f2ccdcb0aaab041.png"},
        {id: 29, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5429/image_trimmed/b30e528e055bc01e4894d772f0e1fac7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5429/image/a4a9db5814ce4bd0243ea1dac0782c2d.png"},
        {id: 30, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5383/image_trimmed/b165546741881c0e8318007e13472922.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5383/image/577a7627f91d1c6a90f936e4ee726661.png"},
        {id: 31, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5450/image_trimmed/f5663dce6eb4520b51461519876b8366.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5450/image/3e1340bfc1ec6295bf863829ee672729.png"},
        {id: 32, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7106/image_trimmed/d6a82942a7fa4eb5c84be3692f07721f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7106/image/27c2398e4f787eb35c553d71e54d63af.png"},
        {id: 33, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5436/image_trimmed/dea0339537a5130a341ce364adf0ce88.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5436/image/3fcb58e0fe55e677de08e04913a068a6.png"},
        {id: 34, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5440/image_trimmed/686af1e664fa6e590bc5b0d7a21b2306.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5440/image/7bb655b184106b746e366edeabf9dee1.png"},
        {id: 35, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5446/image_trimmed/5e2f260ad0070c51b7d57c6a74d53571.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5446/image/6f10aeb84cadf9ee5cf9916c9aa5892e.png"},
        {id: 36, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5379/image_trimmed/250c57920a5b01fb116e04f1a82b756b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5379/image/059f01e9d26af9ec61551d5b36ce4dbd.png"},
        {id: 37, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5420/image_trimmed/7dff8e322fd71f758b0e87dc75a7faba.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5420/image/43c71a38da897a141f91eaf34ff0d0c2.png"},
        {id: 38, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9023/image_trimmed/2c110aef82c17a08f9137bc17ef72a09.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9023/image/106710746496c24c9fb4e3e53036100c.png"},
        {id: 39, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7097/image_trimmed/cb93068fa266ecdc744ee20ab74f13b2.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7097/image/d3e3a20807621461c9b55fa3d3b084b6.png"},
        {id: 40, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6994/image_trimmed/74d01c37370c6988408b34816df3e567.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6994/image/1ca416e2226eb3815b0360d39097d5f3.png"},
        {id: 41, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6998/image_trimmed/2f328b743634347275985bf2cb7c3cf9.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6998/image/61423f19edca7ea9cd3c1a9e4b9d0386.png"},
        {id: 42, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6999/image_trimmed/11d83ba089716d6e31950a6be14e41a8.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6999/image/120b67679a019aede6ddd91b4548b20d.png"},
        {id: 43, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6489/image_trimmed/a2b2c78e6fd5754be51e723b7bc91102.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6489/image/e62608465ff3055f0756c06e792e8e0b.png"},
        {id: 44, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6492/image_trimmed/af7a8ac5f8a9f93896a9f562c057de4f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6492/image/2b7fb07decfcf646cc408e48dec2fe80.png"},
        {id: 45, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6502/image_trimmed/94aeb0f93acf269c08dd403faf2232e2.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6502/image/ead02d42f5a1cd01323db6d4b20b35f8.png"},
        {id: 46, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6497/image_trimmed/85eb4d9ffc024dbfc9570261c4348ccd.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6497/image/d321d69dc7f07844d15d20d74efef0e0.png"},
        {id: 47, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7117/image_trimmed/42593bf9ba527338e24879a25ce884ce.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7117/image/e4998d3021c9ac943612d6c7760bddc7.png"},
        {id: 48, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7086/image_trimmed/4af2a46d8d71336136644ef644527ba0.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7086/image/a3eadbe1bedd9a045227ec4b18dea812.png"},
        {id: 49, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7078/image_trimmed/11689cb93edae18f1b74557c6985f73d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7078/image/282e527ba115209a04a1d6c47c889f7b.png"},
        {id: 50, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9048/image_trimmed/ccb466e24f68820ab564d5bac49173b3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9048/image/c1cb77177da51c5af6c3148077b6ecd7.png"},
        {id: 51, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9031/image_trimmed/b3cedf3ca670a1decf4143c16340ed32.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9031/image/63f6f0bf268a7f48a18e6d698fa0cc8a.png"},
        {id: 52, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9041/image_trimmed/8b33aab3f490c981a179268cf16e86b7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9041/image/72231eacf0fd1ea814a878ab0d8166f5.png"},
        {id: 53, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6994/image_trimmed/74d01c37370c6988408b34816df3e567.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9056/image/0546cc54c3a6877b5a3d6341d6f27876.png"},
        {id: 54, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9017/image_trimmed/62cfbc75594dc81013c9ec4631a40b8e.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9017/image/48ea7ba6de31f3b392d33f193101ffe9.png"},
        {id: 55, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9975/image_trimmed/811a9ec1f2fda20cf708f58489f5eee2.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9975/image/4887f8ccf23564f2acd52028e1365378.png"},
        {id: 56, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9963/image_trimmed/8d9e2104f4a047534ca0f1b6d6b292a0.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9963/image/c63833b0790c485b92a782b6a6e00837.png"},
        {id: 57, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9993/image_trimmed/300a4de34a160d54c10e604f3db0ee20.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9993/image/6bef762dc6a7010901abcc5df8ddccca.png"},
        {id: 58, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9959/image_trimmed/1248b372fc02cd1a50930cd9d6de7fdc.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9959/image/808c9f74e523879f9fcf68776f7e91a3.png"},
        {id: 59, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9983/image_trimmed/a057bc4dc83949850937b05cc4a4dbb2.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9983/image/db42d4d1aee6bbd38b5f01f1b274171f.png"},
        {id: 60, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9970/image_trimmed/5d0b9bb5181be01de17f2a46bbada5cd.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9970/image/a74f990431a571fbbe0e648002bc55d5.png"},
        {id: 61, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9955/image_trimmed/50904a9ffa4066fa05f4e20465b84d49.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9955/image/69455a1ea4c30489e74bdaabc68712bb.png"},
        {id: 62, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11996/image_trimmed/95d72c89351a7e49bb9b45fba6643ee4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11996/image/7b60e7d3613e4b7f80424a0f1494c73f.png"},
        {id: 63, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11980/image_trimmed/db33749dcf28ab0874a27c25d37dd11f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11980/image/9e9bbe5f333fa4db31c5cf9c6ea5f56b.png"},
        {id: 64, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12016/image_trimmed/c634acefd9ff5425bd996c980c4b8f40.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12016/image/687ce5031446bfcb31ef5e7b0e0d7064.png"},
        {id: 65, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12007/image_trimmed/d102959d8a380a77b48a17926c792997.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12007/image/e8cd0cbc6b8ce17c81e212311d9a19e8.png"},
        {id: 66, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13081/image_trimmed/5bd9ec541957047615df949559eadf52.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13081/image/d77590ba08a0433650feede1492a32e3.png"},
        {id: 67, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13074/image_trimmed/8fe842533885e035489bf3f26e25ace8.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13074/image/53230c7479be8014216329030927eaa1.png"},
        {id: 68, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13115/image_trimmed/c1511939b9ec2741529ab6f6478267c9.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13115/image/33d1d827aeccee485d7d52839150a44f.png"},
    ],
    belt: [
        {id: 1, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1102/image_trimmed/4fe5658177ad72422610b36cfd3f8735.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1102/image/485882136d475c163e77e944617b1784.png"},
        {id: 2, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1128/image_trimmed/9ab38de141d0a017e75455619082cb04.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1128/image/b22625f0be9acadf4739a04c5457fd27.png"},
        {id: 3, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1140/image_trimmed/656d4d30ec7faf502696930a6303daa7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1140/image/fd58bddd67e005dd2b6955901e17142a.png"},
        {id: 4, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1163/image_trimmed/e2d50365c52c6878e056c19782bd1853.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1163/image/f3dcc86d8e0f083de0a73357607c2087.png"},
        {id: 5, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1190/image_trimmed/77d5f5deeb43124228c3a4192333db43.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1190/image/c6b4772acc83c05bfa6d22bf97cfb610.png"},
        {id: 6, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1201/image_trimmed/ba41d00288131e4315ed0326c1390b78.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1201/image/69b1fba6b144126e206eb7fab918759a.png"},
        {id: 7, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1211/image_trimmed/84ab320192002c5bb1f832527ee0df82.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1211/image/4b84b124472c3fa5dad32838cf1fc748.png"},
        {id: 8, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1222/image_trimmed/5e793625c066a22e65f266923f14ed72.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1222/image/aa8caed541ba3772172b45d3b1c50b92.png"},
        {id: 9, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1233/image_trimmed/55f8e07f0b98d8d5cf1c01afda61bfd8.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1233/image/ee00773e361c2b5811f9ac9ec21753f9.png"},
        {id: 11, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1244/image_trimmed/539b71474812fa00d90302440f17425b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1244/image/3e6153284aa1be5a8a5530347c429078.png"},
        {id: 12, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1256/image_trimmed/6bfce3776eb58adafd6ca19941467de6.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1256/image/40fb2bdc7a5b75651d1549485c9ef999.png"},
        {id: 13, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1268/image_trimmed/7fd1f7451d38d11f02a47b0ca4db18bf.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1268/image/d43044341845d614ac7a3f5ba8fc4cb5.png"},
        {id: 14, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1280/image_trimmed/f3d5d0def34ba704d5685f08015d6205.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1280/image/a3cf5603317311787f753d6f521dcd5c.png"},
        {id: 15, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1290/image_trimmed/47ee7e63f99206e390327c659e550f75.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1290/image/ea6256cab7a148bb3c560856e1131a29.png"},
        {id: 16, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1301/image_trimmed/ca3e1c6252416d87c24a1b33ee199133.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1301/image/9425e84f32c6b69bd37de5f5bf098b90.png"},
        {id: 17, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1312/image_trimmed/55ac1e0d0babad2a832ba7cc2aa9e218.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1312/image/2e4c866b7842ef4dfaf03042e5cf82b2.png"},
        {id: 18, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1332/image_trimmed/7eb35a20177e00f2a516ab8c6d10ed20.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1332/image/b6117b5ea53f827302dc7b0a7b708f34.png"},
        {id: 19, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1344/image_trimmed/9441e87ed2a751a467c9eebec4d14794.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1344/image/8245c1e04d8578fef4e09bbad6df2bcb.png"},
        {id: 20, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1354/image_trimmed/f39a300096e88183942adda0a1ba5cc3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1354/image/68e172466a12205a5d590e9ef3d8c978.png"},
        {id: 21, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1363/image_trimmed/16cb2e06f245747916402eee7d9b7f4d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1363/image/0914b1142e9bd8ccec9b1af4e4241c38.png"},
        {id: 22, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1373/image_trimmed/1edd143ca21b7c5aa49c3cc5ce035d47.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1373/image/4b083377ffdf1d7c4f20131cb5acde8e.png"},
        {id: 23, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1384/image_trimmed/b3ec355198b824351294aff13fa13a43.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1384/image/85d08b3e3726e951b75c608562fae42a.png"},
        {id: 24, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5387/image_trimmed/ceb5b6aab314acd9d4c7ad3ff9f6462e.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5387/image/23a2d632c6d5b3736aa450ecdd4751bb.png"},
        {id: 25, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5403/image_trimmed/6992f9c44017f8d3ed41fa9d50b6bf44.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5403/image/389d1fc43b84aff0c5900c053cdbcfd3.png"},
        {id: 26, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5407/image_trimmed/54f7ece5648cc6c07a414cb1a301cab0.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5407/image/f71844e41dc19ecdc40041eaa4aa9d0b.png"},
        {id: 27, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5426/image_trimmed/5efce56a9acc51939585afb058ebb882.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5426/image/a5aaebcc59c8856b48dd002388a71e99.png"},
        {id: 28, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5382/image_trimmed/28db6ee6adb094dc95e695d9421cdb93.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5382/image/15403979d3f211e54402caa97104e6a0.png"},
        {id: 29, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11989/image_trimmed/01d85d197877fba7be912fd6fccda905.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11989/image/c763da74f323cab25fdb070a648752a8.png"},
        {id: 30, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7111/image_trimmed/895d8d3573138d0d29a3af2313917c65.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7111/image/b58e11298e1bbd99f05327b41fc04b5d.png"},
        {id: 31, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5445/image_trimmed/89e7a034907869336bdcfc6b8fb6f295.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5445/image/c39d53544683a5ec9b445f064f522570.png"},
        {id: 32, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5419/image_trimmed/ece4578cbd01ab809ac0d86b71b00448.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5419/image/62d0c9de7187dadb001423c6670e04b5.png"},
        {id: 33, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9025/image_trimmed/6cbeb0d9deb661dbbda92fff45484a71.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9025/image/acb9c219f0e963d9ae7f0cae170b21e7.png"},
        {id: 34, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7100/image_trimmed/b6833b772dee13243d3f9ab3aa591346.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7100/image/760a58d2a10b304525882ad802fa5ecb.png"},
        {id: 35, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7055/image_trimmed/90679060287f1e63816d5e04bf710679.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7055/image/030117a019e5efd2ddd89d71a8c4bf3f.png"},
        {id: 36, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7057/image_trimmed/ef221c3646e81e71673397ac9b75bc25.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7057/image/17d9c4f5ce49ae2878654916f555e665.png"},
        {id: 37, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7060/image_trimmed/1616500de73becccc6cb2869d8add20d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7060/image/ecaebf08a6749b22f8d652f59baebd48.png"},
        {id: 38, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7061/image_trimmed/99d0d6fa19878c45af9d3397c1ba61a4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7061/image/c809661f709c2525583300f65e0b5893.png"},
        {id: 39, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6493/image_trimmed/e2b892d2c3c0849a93a65034860e0774.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6493/image/c237b070b069dc3301e73936911d889e.png"},
        {id: 40, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6501/image_trimmed/c69d8ba9fe0cd7ce58f206b52ea34d88.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6501/image/f7300e9cc172988ddb4e7b9a7faf6576.png"},
        {id: 41, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7082/image_trimmed/94feb84814a6b940c671bb431e77f534.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7082/image/782a72941107e865bca40d532aefdcde.png"},
        {id: 42, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9033/image_trimmed/b86fa3b2f07aa738d1d2567cf0a12a01.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9033/image/c7b187d9a9cc915b77f2ef99a0d983ed.png"},
        {id: 43, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9019/image_trimmed/5236009c706b64952b904eea3d457a76.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9019/image/281d5d86f25286c4a1b4c6060e2f56fe.png"},
        {id: 44, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9987/image_trimmed/342f2764b33f26cfc474dbbbbb134780.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9987/image/fc05d0f3c7581bc251adb5ff002f5daf.png"},
        {id: 45, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9973/image_trimmed/1e0213380e11aca51ac4b600968df9c4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9973/image/58d44ae8b6abcd296f9b95daa241adc1.png"},
        {id: 46, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9953/image_trimmed/e9097f73a7d89f9e10eae686c425b0c1.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9953/image/3d6c1b7c5295967f2b3df1e0003ab8b5.png"},
        {id: 47, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12017/image_trimmed/b94550f1548a9dcdb77f1979273d814b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12017/image/cf6e5321b64b2c6cd4e8963799911c96.png"},
        {id: 48, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12009/image_trimmed/3d024362441520b1e5685cfab43b0864.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12009/image/0024767c3fe3f18389b5860ba36c6245.png"},
        {id: 49, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13084/image_trimmed/24cccba1599414b1b60b49966ad42c41.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13084/image/0d4a3679af98b6b6cc398390a34100d3.png"},
        {id: 50, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13078/image_trimmed/1b44f5790c2bedd7fcdc264642dac525.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13078/image/c832b64434f506261160107ca0f6a903.png"},
        {id: 51, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13093/image_trimmed/52cdea4713889d20394887efb83a537a.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13093/image/8130ac19140fcfa356c97b7a19324311.png"},
    ],
    legs: [
        {id: 1, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1105/image_trimmed/7c4be2d24080eb5deee48edc7f08aa12.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1105/image/dba6a4b26e59551515c99b1c9f04c367.png"},
        {id: 2, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1117/image_trimmed/1768fe07342733aa4bf65835f89341f7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1117/image/1cb49c27483f7316216caf14f2afea1f.png"},
        {id: 3, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1130/image_trimmed/1c60262ff5078b0b94fa1932252f6023.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1130/image/432540a46470215df42578cf2c0198e5.png"},
        {id: 4, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1142/image_trimmed/ce4c8df138062888d46fb6fe250bbbfc.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1142/image/42e067f3d68783b4a1f892f468e4296e.png"},
        {id: 5, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1152/image_trimmed/28b9aeaa2b1716e07888a2885a517ffd.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1152/image/cb418500b02422ff0e6f780a93f63b24.png"},
        {id: 6, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1166/image_trimmed/d818fef26db0239d5a0ee11980eaeb07.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1166/image/b8d0b1eb1a72e97577a3d3c278ac930c.png"},
        {id: 7, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1180/image_trimmed/cabfceb183172419314445b1544e199f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1180/image/259543f26d635951f9b700ae2b2c72fa.png"},
        {id: 8, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1192/image_trimmed/ee798e904475a24ec23bda9ba03fc13f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1192/image/e938f51487333e9e7ee3781d8944794e.png"},
        {id: 9, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1203/image_trimmed/1084dfdeb79f416a3a40fffef6d0174a.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1203/image/b4dfab2bac07defdef599886735d6a2e.png"},
        {id: 11, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1213/image_trimmed/30ba67aec6beb6847114353757e8aed0.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1213/image/56c80421c71cd53cae088e71c2794815.png"},
        {id: 12, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1224/image_trimmed/c7c562c6ca7888d605d8546d89330e26.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1224/image/6c590741ce4509ece9317a2c9379b3ce.png"},
        {id: 13, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1235/image_trimmed/ee0359a709c4852719a9283198fb9cc4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1235/image/f9082fa4884cda9b7491a59c3e5dcf55.png"},
        {id: 14, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1246/image_trimmed/2622e0c2fdc5e434e57d2a79cf5e69b3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1246/image/c5d9ce62ac593de6f2729484c201ac3f.png"},
        {id: 15, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1258/image_trimmed/e700ce540c481c44aa2d5c0ac69db63c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1258/image/47b7713cd4b49c84cb148d3fa36e5a3d.png"},
        {id: 16, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1270/image_trimmed/9a70aca17bf89942722fa4144feba193.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1270/image/01e17486e8a7c087817c42ccad600d33.png"},
        {id: 17, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1292/image_trimmed/ea8ba91d52605b51d535861700037802.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1292/image/c9a9191dd17614532afc760bb23d3717.png"},
        {id: 18, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1303/image_trimmed/12dcf718cb43b8d4b7c565008e2fbe46.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1303/image/86f763ccd04481f0a6c8f5cd998e80a4.png"},
        {id: 19, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1314/image_trimmed/04100d1fa7235575dcb91c28cec9ef3f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1314/image/144c606e97953c7bed4943f24d710013.png"},
        {id: 20, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1323/image_trimmed/8292567d38260e1a42066cfc43289006.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1323/image/acd43af2fffd6c8db7eeb6152371272c.png"},
        {id: 21, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1334/image_trimmed/a9109608d7f2dae5cde9ce672b49f1c1.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1334/image/a1999d27327d794fe46831c9c670a0ad.png"},
        {id: 22, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1346/image_trimmed/88bc4e8c3177bd1e1de471414f022b58.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1346/image/0203d614729590286fa8aee1d19596db.png"},
        {id: 23, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1356/image_trimmed/a9c315ebd73a69383408097776ef5397.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1356/image/7a6e36b40954cb20491f91376c136c83.png"},
        {id: 24, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1365/image_trimmed/584daa3387c887c162e191ba50b8eeb8.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1365/image/b5d5085021dfee8b3fb20c2efb01e201.png"},
        {id: 25, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1375/image_trimmed/2a1a936bdf028ec8090c2633f664dbc6.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1375/image/fa9a674979673afb1b3b803e2311cf95.png"},
        {id: 26, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1386/image_trimmed/1c02d328662f61173fb3bc7d0cf66031.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1386/image/7c950a17fb4489f96a6bef1fc0c45b2c.png"},
        {id: 27, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5385/image_trimmed/d8c633916087d0131b4462d7bf87ae21.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5385/image/21b6348b21125bd35013b155e26a5c60.png"},
        {id: 28, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5447/image_trimmed/fdc1e49f9360159149865a917702134b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5447/image/8ca5ef417456b872514a9d3324c496fd.png"},
        {id: 29, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7110/image_trimmed/a9b08e35761d18a474d04b417eb082ab.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7110/image/8cff471dcf8ccd928437dd20017e5b29.png"},
        {id: 30, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5433/image_trimmed/4ef918c2c431380deb7d0614051b8bd4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5433/image/7b2d0d7f317dd36fd77205ed68752586.png"},
        {id: 31, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5438/image_trimmed/777a6aa82a93b38cd13902c734be8125.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5438/image/1b317db5f7a11acfbee313a41a23b543.png"},
        {id: 32, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5443/image_trimmed/62c086f25eeaca16c219c711647cee97.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5443/image/67bdf78cb2401436a82eeee4664edfd0.png"},
        {id: 33, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5376/image_trimmed/96c1d05774a73b0a673984bfe6838977.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5376/image/eff9322c72963b6932fe1e7b9db5fd35.png"},
        {id: 34, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5417/image_trimmed/e2328a059d30783e3f3163414cad9297.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5417/image/b55d4db573f3af8c41ee0deea7eca3a1.png"},
        {id: 35, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7099/image_trimmed/45638255c5f4f51cc35fd87698f257a1.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7099/image/10ab3b61857d7dbca399921715f50506.png"},
        {id: 36, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6487/image_trimmed/edfb5efc35d11d823677c0199fd28ac6.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6487/image/8100ff04703f1f826542cdfa2833c99e.png"},
        {id: 37, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7088/image_trimmed/c2f1d650af0b9feae380550ff5eb7242.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7088/image/ff46838a518c2752dea9e3be9ed3e252.png"},
        {id: 38, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7081/image_trimmed/6ce333fc5a559e10fc874ec44e66be60.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7081/image/a5f16dfce84d4e038a7aa2388cf31fd7.png"},
        {id: 39, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9051/image_trimmed/535ef5ad1171d6a0ba5ca31b1252180f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9051/image/0e2926131fb0d564e24fd3c3f16313cb.png"},
        {id: 40, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9036/image_trimmed/55cb49123928b9267860df288da86b67.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9036/image/da92df9d1542e5fd12c7eb4ab5a749b0.png"},
        {id: 41, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9059/image_trimmed/3d7cde27045a0235d05b6789db3b0c5b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9059/image/7edc649d63a2fc049a00219f06c0b198.png"},
        {id: 42, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9977/image_trimmed/985b2d3c5455bb81fdafb78df129ad84.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9977/image/1e07a43a5d8fc95c83c51afacd7d74ac.png"},
        {id: 43, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9956/image_trimmed/d752949dac3dd9f99ca743eb6b767eb1.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9956/image/996c4f395952b2aecd7dcf86c977d422.png"},
        {id: 44, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12014/image_trimmed/abb00c725586c7e4f8107f3bd040ee39.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12014/image/d3ab772dcab0a36ef3831c910991b223.png"},
        {id: 45, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12003/image_trimmed/f1d0e98fd3051e9eb4b484eeafb8be3b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12003/image/f3efa2d0f9c49149dc712077e8fd09f1.png"},
        {id: 46, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13073/image_trimmed/8c14362de9b89ded0ccb88fe4b272d75.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13073/image/12a31d10903fe8f0dfd98ea50fe535f6.png"},
        {id: 47, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13114/image_trimmed/a8905b8396f4954439fa6e54d25ff443.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13114/image/b019ebbd5818268c85f7ab581dfd0761.png"},
        {id: 48, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13087/image_trimmed/2d8925b8041deaaeffbe192111efe980.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13087/image/0f51280ef2d7df0bdcd01104a869f46a.png"},
    ],
    shoes: [
        {id: 1, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1098/image_trimmed/79e2806382cbb9c5e40b56761ba9125d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1098/image/a453fc2051919a288d2ccd0cefb46315.png"},
        {id: 2, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1112/image_trimmed/2bb12ea270f7c1274f86bc28298d20ad.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1112/image/249002b84de640baf49de576ffc6faf9.png"},
        {id: 3, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1124/image_trimmed/8a1375f590fff227afe2c66cd59e1896.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1124/image/442b1111a4f3cc138ff1970e915d3bb4.png"},
        {id: 4, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1136/image_trimmed/c328cb1a9d323b1248586c8279d54a5c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1136/image/47fec652ff631b15ef87d3b3ab2e7bb4.png"},
        {id: 5, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1148/image_trimmed/2f3600547296ec43d2cfc190383a1528.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1148/image/eef8cfe30f6b77f00f37b6f129183eae.png"},
        {id: 6, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1158/image_trimmed/349baf1366bc1c342ca88b703df90adc.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1158/image/30fc18ab8d3216e8968b9e95c95cc9c5.png"},
        {id: 7, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1176/image_trimmed/2855bc9723857edbe04f56f275d0a190.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1176/image/fd99d1f5cae025db610678e645447310.png"},
        {id: 8, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1186/image_trimmed/50b1a780e7ee46dba071dfa192d9cf71.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1186/image/f693b57adb2b15f1e305ea3853cea85e.png"},
        {id: 9, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1198/image_trimmed/a8c550cf3c013e1e0a87c38e151e1383.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1198/image/bf0f2a3e05228c1e28fb3c25441ca3dd.png"},
        {id: 11, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1208/image_trimmed/a5c6b63a8e521cfc5c7de951150f23cf.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1208/image/c3c88f08c8ca69ce98f4f265042e60ef.png"},
        {id: 12, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1218/image_trimmed/c4d9e4faa5420f775202dd4e2c0e763f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1218/image/b41cb7300dd05c3f148f0ef2572becdc.png"},
        {id: 13, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1230/image_trimmed/8ee21bee9d0b7f79b07a7b09645f7186.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1230/image/a6b80fa1bd199c388f784141a86e2ea3.png"},
        {id: 14, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1240/image_trimmed/ac031e2fe31c2e5b8a485b62705b3b7b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1240/image/69b67ecc94ee3b2f6ed8b95dfdb0000c.png"},
        {id: 15, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1252/image_trimmed/024894c6e38fec7c4f5894783fe7554a.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1252/image/5b1adfddb89158fbe18468ef9471cd69.png"},
        {id: 16, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1264/image_trimmed/d7e49a7872e1d35edf1b9b382931418b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1264/image/d980e468ad88b64f8df223ec988f7b5d.png"},
        {id: 17, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1276/image_trimmed/4749e6b200573d41e273b437e1f7231b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1276/image/dceec633d4420fece9ed73f5a9dd8d07.png"},
        {id: 18, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1286/image_trimmed/18bc5b3c7c4561e79784d2b31a9c5693.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1286/image/52f3c0395c8ac85afd6697a4b20cf76b.png"},
        {id: 19, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1298/image_trimmed/71dfc0d2c186b720209fdcfd07b44342.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1298/image/4d2f08156e95804c7aa277192993fe7a.png"},
        {id: 20, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1308/image_trimmed/8e20b07b7e49b668d4a7e7803c7841e8.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1308/image/f623d4746bd7257b41e8aefc4b5e010a.png"},
        {id: 21, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1320/image_trimmed/b3fbcf94388cc25ae2b1ae8e93409afa.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1320/image/abdb90aa618eea0a4da3dd0bcf13fbc7.png"},
        {id: 22, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1328/image_trimmed/348a4d010b8038461943db5458cb203e.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1328/image/21c77cc71b4b83e84d9ab3049beecc3e.png"},
        {id: 23, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1340/image_trimmed/4f0d48b4301bc80a667879297fa463b6.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1340/image/375a8131ad337d9ab9a07c6938529d40.png"},
        {id: 24, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1352/image_trimmed/49d39b11e1897dc69b901f472da0e2c8.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1352/image/157b4f186478719d7a3171d118dcd487.png"},
        {id: 25, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1360/image_trimmed/f6190d1d9c463dd8fbf702f1bca1310f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1360/image/d24a7b12a5fee3886197305a52b20253.png"},
        {id: 26, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1370/image_trimmed/ef96af72812bef10b8bdcdd446bbb49b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1370/image/f2f1303f03e5fb4cf82f5922047fabd9.png"},
        {id: 27, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1380/image_trimmed/61ffec47caada3101096147e7ef41838.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1380/image/42b3e9dee453e8f9cec0b5e46b421fcc.png"},
        {id: 28, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5386/image_trimmed/3895252714ac5eaa7741ce4fbc8d5094.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5386/image/a66ed57bbb195ee0c5087da98b0527c1.png"},
        {id: 29, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5402/image_trimmed/fa9ec67de3847762f38582a27695c207.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5402/image/7a9943b724c15b79aad8f5aa6ecc6e00.png"},
        {id: 30, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5425/image_trimmed/6311d89b9594f7e2898ad681d0909cbf.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5425/image/014b06e06c2c4a39ffd8fa54a5955b6b.png"},
        {id: 31, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11988/image_trimmed/303737752ccc71e6f70fcf3f1fbd5310.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11988/image/10213c198a489e4014939de88c9dc70f.png"},
        {id: 32, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5448/image_trimmed/21e2830ed2c892130c4c4023a5f5b637.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5448/image/6afae21d87fc3dc2ee450731d676aa07.png"},
        {id: 33, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7104/image_trimmed/cfd4e1f771af67adee69910cd24fd6d3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7104/image/5378df0dfc5d42e901cb4095918b3b7a.png"},
        {id: 34, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5434/image_trimmed/239df0bd29f04ce1ceaea5948ad85098.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5434/image/3a0b6ba0f1e43ff3ac2c0098b5e9400f.png"},
        {id: 35, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5439/image_trimmed/d75bbab8a74d8e157165199fa23bd859.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5439/image/64b4fa1c930ffd95b97e08422ce0fba6.png"},
        {id: 36, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5444/image_trimmed/7e4228b611646745d1020ac79c08e09f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5444/image/f83db0df0b87f52990a00a5ddcc78643.png"},
        {id: 37, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5378/image_trimmed/194ff2323e3b53749152a519e4c23ad3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5378/image/325350ffdfde37899b6ab40d04422e02.png"},
        {id: 38, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5418/image_trimmed/7580ed758839c72c82beb8abe2b539cc.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5418/image/1607b2251ad70b01ff5029fb4d07f913.png"},
        {id: 39, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6488/image_trimmed/b97b344439f4209250e74b9e97ef8cd1.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6488/image/ab8f0f8808b92a917f10531fe1a52044.png"},
        {id: 40, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6498/image_trimmed/819941daac37f44774e160f64fbb9aee.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6498/image/9593c37eff6e0dd906554ea016c177cd.png"},
        {id: 41, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6494/image_trimmed/685e260f4b133e3165a2f910207337e0.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6494/image/b4d35eb187ae3b9bde5ae14b5a8525a6.png"},
        {id: 42, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7115/image_trimmed/fcc26a48125aa93622eefcf22b45f64b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7115/image/9376f10550b61d0cee610ffffa7008ab.png"},
        {id: 43, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7076/image_trimmed/cd51ab046ede663657bcfcf013f5ac20.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7076/image/f817be659a6cfcb233dca3a8d49c6f20.png"},
        {id: 44, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9052/image_trimmed/e91c13a78adc9eca7a9ec90cfa76099f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9052/image/e17ef12fd12e4ca54fb5d8721079db8a.png"},
        {id: 45, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9045/image_trimmed/53b4ee24abb802576d271b94a2180520.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9045/image/2fc681d7382a860750134da2f7772b33.png"},
        {id: 46, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9978/image_trimmed/c0829fef61c765280f4d4bdbd2d5c168.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9978/image/ae15966e72b441a85b0cd7ae1a3f2719.png"},
        {id: 47, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11985/image_trimmed/cab0c40ad515671f7e80d847624efc6c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/11985/image/594de0977909632e0419313bccd4a6c8.png"},
        {id: 48, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12002/image_trimmed/628c52775a28f3992595fc816b2a281d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12002/image/e1add92c31bf1723311670e4718f7657.png"},
        {id: 49, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13118/image_trimmed/4d05179cfe05994a51374f78b9fd702c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13118/image/3c3f9ab51c1425187faa89a53027d42f.png"},
        {id: 50, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13091/image_trimmed/b7dcd1c61571ecbbf3649801afeb537c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13091/image/4e291ba61283e90747f7c0cc05978d14.png"},
    ],
    head: [
        {id: 1, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1107/image_trimmed/9f30e191797e536e93b4a7bf1bce030d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1107/image/a8af2e8d1fcc9712bb0fbcdb6e1a3b97.png"},
        {id: 2, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1119/image_trimmed/8db7d006d59cba0bd370ee51c47ec71a.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1119/image/211c5bc069ebb775ec9bde3de15e7a80.png"},
        {id: 3, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1132/image_trimmed/ce561565be77c5f82e520bd498d1e403.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1132/image/2f097c455e8ab41969ee3a01dbe4d0db.png"},
        {id: 4, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1154/image_trimmed/651ae0091abd16b09d7f0e207e370404.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1154/image/ba68c7537e628f9961c498794f76eb74.png"},
        {id: 5, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1159/image_trimmed/53960fcf304dd9138ea45d9e8d1f75d9.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1159/image/cb263afbff53f67e9f03a0bde498747c.png"},
        {id: 6, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1170/image_trimmed/fca276d71690215f1690a7036704fe64.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1170/image/45163b47672b520d772e2f595a8c727f.png"},
        {id: 7, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1172/image_trimmed/b1bc314ac1388fb91623ceec792e1f86.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1172/image/ae85ddefdd0d8ea3daeea90c33315025.png"},
        {id: 8, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1182/image_trimmed/0b6c66147a349cbdaa534236a5b1a0ed.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1182/image/fafddb83b2d54ad40395151648087214.png"},
        {id: 9, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1194/image_trimmed/85251761d33bbbe859ac89cd6d7da244.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1194/image/eaa20294e4d79e64ff238442d23f9399.png"},
        {id: 11, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1248/image_trimmed/36619a72da7caa151a7710f8756e52e0.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1248/image/fe41baade70730d08d0ba6440dabf3f4.png"},
        {id: 12, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1260/image_trimmed/f888829a0f067411363bdec52c1a103e.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1260/image/9a3c2bd4e35ec06d0177045187f1dc5f.png"},
        {id: 13, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1367/image_trimmed/0445289d885bdf37e437d03fe87c4276.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1367/image/1bf9a0335ce4dc1cdb82b5fcfb5f0cf6.png"},
        {id: 14, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5388/image_trimmed/f160920907337ea7122b950bb23435b1.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5388/image/dfbf4eed559f05c3e6765ed3a0955642.png"},
        {id: 15, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5435/image_trimmed/e78a78bbf91730b17ef01063f82cd254.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5435/image/aa8637b93184be14c4e686345aad8d1b.png"},
        {id: 16, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9026/image_trimmed/3fb067a42686c216e22c4f47725d814b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9026/image/5fec2b4042377bc9bcd427c5b6683f4a.png"},
        {id: 17, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7044/image_trimmed/d3082498052ebb2211bf6992faf92dc7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7044/image/0dcbcedb95112a291731207af2f0c940.png"},
        {id: 18, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7045/image_trimmed/53c791a3db41da2bd9d7c55c6b28b4e1.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7045/image/a56d67d934eba5eae55a8a413cb8cf98.png"},
        {id: 19, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7049/image_trimmed/9bb415b4f9c0083e030d30f9425c990b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7049/image/6978da4e674dc0c921c486b817167397.png"},
        {id: 20, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7050/image_trimmed/7edfa2c76215295dd67acce301a1e894.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7050/image/f8754a585906a6854f4f6e365d2ff5c9.png"},
        {id: 21, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6499/image_trimmed/6f46f43912773342e157d75256f4c699.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6499/image/1638c2d04a1fe90c533d7df5691e23b4.png"},
        {id: 22, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9043/image_trimmed/191009e9fcc618702625f479800bce08.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9043/image/3bf3e2ac94725354b282b054a714477d.png"},
        {id: 23, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9058/image_trimmed/bdddaeb1ab15aca8b1ce9f3ffe982fc4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9058/image/d3a0813019df2b27e9dc4c390731bd72.png"},
        {id: 24, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9020/image_trimmed/87dd7425a0fac3fb21c5aff72998c66f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9020/image/aefc627c3dded93563652fd3043a2edb.png"},
        {id: 25, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9990/image_trimmed/62ce7ea0748e203d09376f0e50ffe91d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9990/image/c20cc1bb7202e39e732115878c89f096.png"},
        {id: 26, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9976/image_trimmed/999cbe2ab281df9c0cd9737110113405.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9976/image/ee7d5f4ede7381241bf1fcf8f224b5ca.png"},
        {id: 27, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9966/image_trimmed/a8848571e2fc640fd42872813b32727c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9966/image/2f413a2f43a0395f524d22a1e6f11b2b.png"},
        {id: 28, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13080/image_trimmed/4078fd635ce026b149245ad0bb545f92.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13080/image/e90c6914d7162d8f751fa35ffc057e12.png"},
    ],
    arms: [
        {id: 1, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1108/image_trimmed/de9eb0a1fc50194c4c8fa8edc90f2941.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1108/image/ba887d6388881f0bada25c2742376c13.png"},
        {id: 2, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1120/image_trimmed/a691ac18eb0d4c6bdc6ec02be416029a.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1120/image/24d80655960daaa9f316475a8da12771.png"},
        {id: 3, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1133/image_trimmed/00a9cbfea43e06b9b53af4e7fffbf2cf.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1133/image/6340999768978be9253de1b5277175e5.png"},
        {id: 4, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1145/image_trimmed/8fddbde3c999ce3b443f494ebf293223.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1145/image/3b2ef3ba95ac66d67fe075e708301186.png"},
        {id: 5, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1155/image_trimmed/7700bfb54108e68ac4f6d0c2dd1703e3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1155/image/603b287ecdbf0dffa7ddf7341e0bda58.png"},
        {id: 6, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1168/image_trimmed/d17d42001c8714677e8a372b706e9053.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1168/image/1079b3b10fc3234e03c5b63446d7a874.png"},
        {id: 7, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1183/image_trimmed/ae828e6a07cff6b14deb2a9dee70044e.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1183/image/72cf6384db8eb3134bb15c21c67ae966.png"},
        {id: 8, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1195/image_trimmed/4be9b5ffe684072c0cb88e173b91fc76.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1195/image/805d44aba51c65c22573c36f56e204c5.png"},
        {id: 9, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1205/image_trimmed/c0abdb826b30d1a152ef7bcf934b1239.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1205/image/0ed62f8b038109713cc7ea26ca2a4d44.png"},
        {id: 11, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1215/image_trimmed/56d6c78caf6c1b77e57d7627f7886a3f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1215/image/a445dd55dc87fceac28f7506e0533674.png"},
        {id: 12, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1227/image_trimmed/175044ce58ec048980fc41a9afd78a2e.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1227/image/4985ab20083287fcabb971c895fa25c1.png"},
        {id: 13, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1237/image_trimmed/fd06f93422005d133bda436c1e827b05.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1237/image/42e95a0e1fd0f5747ce1446c15d28fc4.png"},
        {id: 14, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1249/image_trimmed/133675aa4bab80ebebb09404142d8c9d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1249/image/f43f13bfcc1d3e6ce7e0d9f458acd2a3.png"},
        {id: 15, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1261/image_trimmed/15f4dfd307dc18f96959bf4e44c7956b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1261/image/35ebff992fb27b3edbbd5f61b85092b1.png"},
        {id: 16, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1273/image_trimmed/ad13f568cd782b87bc7847cb8e1640e8.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1273/image/6a034e46f3280057b106ade1ebb07a87.png"},
        {id: 17, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1284/image_trimmed/5e3ca2211b3fe40abda291ec57b9df1f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1284/image/f1c9edc2342221ac07a18555c771737e.png"},
        {id: 18, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1295/image_trimmed/97db51e25e6ed9a61d53537e9a2d3ef7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1295/image/e28368fd3541ee5c811132abd68a14ec.png"},
        {id: 19, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1305/image_trimmed/bc0fe1506d3b93ce47608a0a5efe09b6.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1305/image/ce6e88bd3e88e1163460ea957634a537.png"},
        {id: 20, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1317/image_trimmed/e1b242003d8b05457ef64169f6030e98.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1317/image/d06c2a589da1692292d35e357412dc03.png"},
        {id: 21, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1325/image_trimmed/e4b41abecc4e62414e12872753a26bdd.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1325/image/d0b3597963de0b9fce96b486676a9c13.png"},
        {id: 22, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1337/image_trimmed/110279a07d9462987a6fb327e6f0f10d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1337/image/56acaf86a02713a9e161fc8b8fa03d8b.png"},
        {id: 23, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1349/image_trimmed/0cd6f3a4c484cdec5afb4958bcd1ce1b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1349/image/b42a1c93fed2463794608e8d0b382ea9.png"},
        {id: 24, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1377/image_trimmed/99d2c92121f8b69b65825dc4912f18cf.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1377/image/54b3b09cf5b27457067637ec1cff0c50.png"},
        {id: 25, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1389/image_trimmed/2b879ec71e7b439665337cc4d55df342.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1389/image/f9497578223f3064c6444462c570d8f2.png"},
        {id: 26, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5384/image_trimmed/e59b4b4b406022fdc6f8f2a55f9b3997.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5384/image/c8bfa99a87f50e19a4966e55e7e79f69.png"},
        {id: 27, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5401/image_trimmed/c5cdc2e428fcf2064ead59062438db25.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5401/image/6422ceba36af53989772a18444e386b0.png"},
        {id: 28, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5406/image_trimmed/82cfc8d7d6bba3246c9a420c754fbdb5.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5406/image/7005e684c50075349c8c345a77518a87.png"},
        {id: 29, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7108/image_trimmed/d97c2703430c04dcb3ea34db6003e55c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7108/image/d14659e08b4aed5fbb04e9ff760cf8d6.png"},
        {id: 30, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5437/image_trimmed/3df320fcc211235244dc6d375231fe99.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5437/image/d324048c4c1e21c457de195e92d51841.png"},
        {id: 31, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5442/image_trimmed/aae3430940c4e7f596c1c3add738ffe7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5442/image/115bd396f23c83865547928eb9a28943.png"},
        {id: 32, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5374/image_trimmed/a1a1a1140fdb029a8678d319218bb9dc.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5374/image/d8cc812e60dd3c07f06a93006a52669a.png"},
        {id: 33, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5416/image_trimmed/fa679611e39d0c4fcafa64fa9246ff92.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5416/image/bd2efb547442e28ace753cb2190ed098.png"},
        {id: 34, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9028/image_trimmed/b1d7f415dd27f82291b272b9a1a80270.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9028/image/db4c0a40ef3f7b0787e3a45ebcf4bbb3.png"},
        {id: 35, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7052/image_trimmed/a81452126503eb5b270ec8f5a800a78d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7052/image/0c73f6c170bb8e9325e1b60191d8fa85.png"},
        {id: 36, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6490/image_trimmed/b271e48d1c918948a2bd718cbbf7b62c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6490/image/1af8ff6f1af3d0bad94b8cb633051e11.png"},
        {id: 37, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6500/image_trimmed/4470ca8fb40851d4e1bb88b9b705f8d5.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6500/image/70815d103e0a1970ea5658c05d10c823.png"},
        {id: 38, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6496/image_trimmed/598d9dbfc178964b66b2234f24d32668.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6496/image/477ee41e731de97d00641e1b6c672af0.png"},
        {id: 39, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7118/image_trimmed/43b5861608078e1bfa2bbbfedf3bb367.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7118/image/07fe0b2b36c9c756ceded35c3dd698c9.png"},
        {id: 40, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7079/image_trimmed/10119dfbdf09d1e963ff5683379135a9.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7079/image/649743a597f5e8cdf6d071acc50c2cd1.png"},
        {id: 41, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9053/image_trimmed/feab6ca09296539361dfc672cb03cc67.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9053/image/9615e810f66b73a8cdec40cac48ff332.png"},
        {id: 42, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9037/image_trimmed/3ef2b2a6bb2603aa2024a67e630d903c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9037/image/2e13c6677f4a49a6a287475eb04dd94c.png"},
        {id: 43, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9046/image_trimmed/964cd2f6180e88318277ae2ba089fd8b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9046/image/a85c8c4102fe996ffcde12021a388215.png"},
        {id: 44, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9984/image_trimmed/ba17358cf0ecbe36684538ff0cd00477.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9984/image/c4287f1a6935dbdf1ba6c864298b5c13.png"},
        {id: 45, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9971/image_trimmed/fd614d8053ee075d94f6156434484a55.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9971/image/6bdb552517fdfe1b64d4f5c547572e1e.png"},
        {id: 46, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12012/image_trimmed/1bcf4044e5d2d4e07c1efb17d5d2ed31.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12012/image/e01957bed7ca5e4f571498364cb68122.png"},
        {id: 47, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13075/image_trimmed/1cad8b45f0090d02099d9bc02cbc6faf.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13075/image/150a85338cf093e2f1f14e82ed678039.png"},
        {id: 48, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13116/image_trimmed/1492d26ccad35c0b6a4c533af43cd576.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13116/image/be18e27befcd96f6a9f8243ddd0f74de.png"},
        {id: 49, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13089/image_trimmed/b149860b24c8f382804381836ae2bdd3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13089/image/1152fdcf97580320f3d86d3ff6b34f0a.png"},
    ],
    back: [
        {id: 1, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1164/image_trimmed/445f764aab6b7dd3c6d1bab04a2c3894.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/1164/image/6e24d0333ac99c56e6df53e56d14defe.png"},
        {id: 2, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6100/image_trimmed/94ed7d2277340131e3205966674efdad.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6100/image/0f18967a0f290b548810e9230edf5a97.png"},
        {id: 3, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5390/image_trimmed/6fa5c9838106a7b8ed7de355e14658e6.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5390/image/2de50776eaac04288f3f55e64a65bf9e.png"},
        {id: 4, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5405/image_trimmed/6a85f62cf4c1e68d46cf02e5cdbebff2.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5405/image/36c91e1621f005586ef1865f530e8861.png"},
        {id: 5, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5409/image_trimmed/70b8fa391333e4defcce47c418d75a6d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5409/image/8f55b5dd3e819b88e6739a12b66fcfaa.png"},
        {id: 6, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5427/image_trimmed/36807d1442bb6cc7077b6c9886776054.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5427/image/dd4dbcbbc65c1cb39e1c0baa8090b571.png"},
        {id: 7, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5428/image_trimmed/3a657e9daa024c62612b691294b84a15.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5428/image/34f60497c90b23ef079754b88d4e51a5.png"},
        {id: 8, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7107/image_trimmed/1e68fe7664cf92e7c838ab480afe1b56.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7107/image/9966df7813e550707ccabfa9a7bd5e99.png"},
        {id: 9, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5441/image_trimmed/9c08d9e6f110b0cf9c1a3f4165488633.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5441/image/499bd394f5c6e03fa0d6e5cd6dc81726.png"},
        {id: 11, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6083/image_trimmed/cc0da98080fd6b5d127ecb292bdd3430.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6083/image/079505b60bfa1a8ba27685cc0546ecce.png"},
        {id: 12, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6085/image_trimmed/c0094a5749c63c26b328868a716e3728.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6085/image/1308a55c580f39a3abb82e93b8c16bc9.png"},
        {id: 13, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6086/image_trimmed/e67a4d488ead530759d8b48c8ebcd6ab.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6086/image/ce50a923050f6e64e9d60eaa8b75a061.png"},
        {id: 14, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6094/image_trimmed/1783b9c57f690ed0c2f1c03da8e7782f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6094/image/7244e930e74f77d6fd2d8f4b64e36de6.png"},
        {id: 15, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6095/image_trimmed/9510f8e765fd6fb7fdaa4b24814342d9.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6095/image/18605cc059a4ca5310c1fb3d6355bd98.png"},
        {id: 16, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6099/image_trimmed/41d7661b03379d24bb2d149b105a6972.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6099/image/fe38c2b5d783aa3c756448fd9845212a.png"},
        {id: 17, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6103/image_trimmed/4b315acbfca44b413d5892ee9b0e6fd3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6103/image/36f87a810ab4a5f87d49b526ad665253.png"},
        {id: 18, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6106/image_trimmed/23d2247facc91bceb5f38f7ec2559715.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6106/image/fff8f6062294b52036096f9315cbfd78.png"},
        {id: 19, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6107/image_trimmed/ba051d7de0b34f80809acd0094c1c4b4.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6107/image/4f1963e268d5ff5608074021537c29d4.png"},
        {id: 20, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6108/image_trimmed/4d48dc13b8477e36864863a9ea9a8620.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6108/image/3f307688f25aed6b521e7adceca9572e.png"},
        {id: 21, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7014/image_trimmed/740e003b64c2df4f36b7b9c393ecdd2b.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/7014/image/3efd07de5f2cac1508fe69c775d9cba6.png"},
        {id: 22, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9961/image_trimmed/fbe17215168db79a2fdb3f4e21e9bbe1.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9961/image/5ba9d722c72bb82403c72d5b0cfc1cc3.png"},
        {id: 23, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12008/image_trimmed/f83b89e23afb5b93a37253eb8efe3768.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/12008/image/d530495c8d40840cbf524fb8ae7ddccc.png"},
    ],
    weapon: [
        {id: 1, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5150/image_trimmed/ae109024bf0c93cfcc87f925dc665d2f.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5150/image/647582701ff56901aef8ade3649e7fc8.png"},
        {id: 2, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5139/image_trimmed/882403329ff6c27d26bf2cf57296aae3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5139/image/040f7648264ff14adfa69cea580f56e2.png"},
        {id: 3, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5171/image_trimmed/1a3852e563f66d9d8546a9170093e637.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5171/image/6674a9606035aa24efea27bbe5e396d7.png"},
        {id: 4, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5128/image_trimmed/1b37ec277e07c97f86512563e3fe0041.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5128/image/38386958477950292643148ae531cc27.png"},
        {id: 5, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5186/image_trimmed/fd5c1cb183e176f89d2df32a06aac7b7.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5186/image/ebcffdb576e1f1afa1e5e31e131c0c07.png"},
        {id: 6, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5198/image_trimmed/d3735246dcf33dbee56eb1b52cfdcc0d.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5198/image/f47bc5f4c7400bd2e251cb84a4179479.png"},
        {id: 7, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5193/image_trimmed/d9fcac6b21ef0c485b2332b122552a2c.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5193/image/e4cf5b2280adc2345530894a9d67842c.png"},
        {id: 8, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6457/image_trimmed/33b71e22a155193ec332e9e34bdb0081.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6457/image/aab69768eebd3de17234a8e0be67eb8c.png"},
        {id: 9, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5121/image_trimmed/ad0e142a4cbf10e064becb438857ca18.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5121/image/f777bd5efcbcc3163dee8f85c4c44772.png"},
        {id: 11, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5126/image_trimmed/f86b8f1e46f2161ff84ee9c4c017487a.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5126/image/2d0caa717a3e554522b830e34f7fcad2.png"},
        {id: 12, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5184/image_trimmed/7adaff96b8e0d03263f0d4192649cf61.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5184/image/1a0960d153547ce4ed6f86fbcd7a1667.png"},
        {id: 13, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5124/image_trimmed/f426611fc3a6f6c8d3582e16b8bb8c28.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5124/image/0f7a4ad5741edc972727e8948d304744.png"},
        {id: 14, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5176/image_trimmed/76b59ec5f7408c6e33f74e82a522c912.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5176/image/2e46db978cf6c9f278ca6490989d2204.png"},
        {id: 15, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6463/image_trimmed/5ccc9e4aad6e6ab14331fb7d34af0aa8.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6463/image/3e9782beabe7f5918984b9530c3d628c.png"},
        {id: 16, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5135/image_trimmed/5a8e82ff155d6d6240d0faac2f44c0c3.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5135/image/0a5f3f68af9b24557b5460aacf3c1de4.png"},
        {id: 17, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5167/image_trimmed/0e43bbe4460cf4e68f920950f04c3694.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5167/image/48f62f689119249f92112a2c2ad7eaa5.png"},
        {id: 18, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13003/image_trimmed/09edeccf58b0303c18e0d36f7b1e7a42.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/13003/image/b3c6d9bfb57a6cba7f2cee95202c8b2d.png"},
        {id: 19, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5122/image_trimmed/aed64a45750f307b1918b260e904ac16.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/5122/image/ce8c94b9b928d49f60201afd41971f12.png"},
        {id: 20, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9878/image_trimmed/f9520e6f5a601cc8cc6a6e1f7cc217c9.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9878/image/d2cc3a5c8261a04ac54bbd919710247e.png"},
        {id: 21, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9882/image_trimmed/cabf2dac245dafbd5c85044a5fe3efd0.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/9882/image/2ae83baeaf8dc23c623dd68b88cf42b3.png"},
        {id: 22, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6769/image_trimmed/5925c014c152861ff87e55a018b8d8df.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6769/image/a9e3b951303710966696806f984cc830.png"},
        {id: 23, trimmed: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6773/image_trimmed/829a6f242bbc66eb43ffd4de9c352b50.png", original: "https://reroll-prod-asia-pacific.s3.ap-southeast-1.amazonaws.com/asset/6773/image/e53e7500f5b1814610fc8b1478a9be8a.png"},
    ],
    lists: {
        chest: false,
        head: false,
        belt: false,
        legs: false,
        shoes: false,
        head: false,
        arms: false,
        back: false,
    },
    activeArmor: {
        chest: '',
        head: '',
        belt: '',
        legs: '',
        shoes: '',
        head: '',
        arms: '',
        back: '',
    }
};


export const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case CHEST_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    chest: true,
                    head: false,
                    belt: false,
                    legs: false,
                    shoes: false,
                    arms: false,
                    back: false,
                    weapon: false,
                }
            }
            
        case HEAD_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    chest: false,
                    head: true,
                    belt: false,
                    legs: false,
                    shoes: false,
                    arms: false,
                    back: false,
                    weapon: false,
                }
            }
            
        case LEGS_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    chest: false,
                    head: false,
                    belt: false,
                    legs: true,
                    shoes: false,
                    arms: false,
                    back: false,
                    weapon: false,
                }
            }
            
        case BACK_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    chest: false,
                    head: false,
                    belt: false,
                    legs: false,
                    shoes: false,
                    arms: false,
                    back: true,
                    weapon: false,
                }
            }
            
        case WEAPON_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    chest: false,
                    head: false,
                    belt: false,
                    legs: false,
                    shoes: false,
                    arms: false,
                    back: false,
                    weapon: true,
                }
            }
            
        case ARM_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    chest: false,
                    head: false,
                    belt: false,
                    legs: false,
                    shoes: false,
                    arms: true,
                    back: false,
                    weapon: false,
                }
            }
            
        case SHOES_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    chest: false,
                    head: false,
                    belt: false,
                    legs: false,
                    shoes: true,
                    arms: false,
                    back: false,
                    weapon: false,
                }
            }
            
        case BELT_LIST:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    chest: false,
                    head: false,
                    belt: true,
                    legs: false,
                    shoes: false,
                    arms: false,
                    back: false,
                    weapon: false,
                }
            }

        case CHEST_ACTIVE:

            let activeChest = state.chest.find(item => item.id === action.id)
            return {
                ...state,
                activeArmor: {
                    ...state.activeArmor,
                    chest: activeChest.original
                }                
            }

        case HEAD_ACTIVE:

            let activeHead = state.head.find(item => item.id === action.id)
            return {
                ...state,
                activeArmor: {
                    ...state.activeArmor,
                    head: activeHead.original
                }                
            }

        case LEGS_ACTIVE:

            let activeLegs = state.legs.find(item => item.id === action.id)
            return {
                ...state,
                activeArmor: {
                    ...state.activeArmor,
                    legs: activeLegs.original
                }                
            }

        case BACK_ACTIVE:

            let activeBack = state.back.find(item => item.id === action.id)
            return {
                ...state,
                activeArmor: {
                    ...state.activeArmor,
                    back: activeBack.original
                }                
            }

        case WEAPON_ACTIVE:

            let activeWeapon = state.weapon.find(item => item.id === action.id)
            return {
                ...state,
                activeArmor: {
                    ...state.activeArmor,
                    weapon: activeWeapon.original
                }                
            }

        case ARMS_ACTIVE:

            let activeArms = state.arms.find(item => item.id === action.id)
            return {
                ...state,
                activeArmor: {
                    ...state.activeArmor,
                    arms: activeArms.original
                }                
            }

        case SHOES_ACTIVE:

            let activeShoes = state.shoes.find(item => item.id === action.id)
            return {
                ...state,
                activeArmor: {
                    ...state.activeArmor,
                    shoes: activeShoes.original
                }                
            }

        case BELT_ACTIVE:

            let activeBelt = state.belt.find(item => item.id === action.id)
            return {
                ...state,
                activeArmor: {
                    ...state.activeArmor,
                    belt: activeBelt.original
                }                
            }

        default:
            return state
    }
}