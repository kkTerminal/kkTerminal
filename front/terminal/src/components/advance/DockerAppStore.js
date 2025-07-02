import i18n from "@/locales/i18n";
import { generateRandomString } from "@/utils/StringUtil";

export const dockerAppTypes = [
    i18n.global.k('全部'),
    i18n.global.k('实用工具'),
    i18n.global.k('开发&运维'),
    i18n.global.k('个人建站'),
    i18n.global.k('数据库'),
    i18n.global.k('网盘存储'),
];

export const dockerAppStore = [
    {
        name: 'Custom',
        desc: i18n.global.k('指定任意镜像进行应用部署'),
        type: 0,
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAADV0lEQVR4nO2d0W7rIAyGYdp7Lb3guVKei4vSJztHTGyKqjWhxTY2+T9p0tZWaciPjbGBOQcAAAAAAAAAAAAAAAAAAAAAOC/eGSKltDjnyk/ha/PWz2t589r955cQwtUZwRsQoLBuHvq7RAvieMVCrAQiPKNY0l2jOP5kQvxF1CSMP7EQKoUZLkhK6TZYCFWi+MFWUcTQyCWEsI3YxPgY8aUppatiMQq3eo/zC1IbWsYL7awjRBEVxJAYw0Txk4iRH/5erA723qgYeTPzfjr4bnr3akUUbyiayvWh5IGdgj36khhDKMSIIYSuh1F796XzPm6mLURrr0x9k9FcOoezZiFaxah8jz9vsmyy0KZcVq8Ykctf1+v29PLVlCAEsXt8JaIpPfbVXltFydqs5JPjor09KDSIUUUvVcPfB5NSelXQ4rqWjjZm9RZCYB258Tv20vVlhv3v6F46XSKLlXC4rG2t+x3uhMFCEYYztb9aEKT3AWTiyO3o86qshFQQikRckK9DaCmOjauHCLuIxfGyahak9+Yy0X00XZPI3Swqw16iusFSoiNHy26QQEERlsrVWnNZ1FD1bjIrmV2QeDBBVFe9/FA0/xAVg7g0S9b2WS0kNqRO1FkHZy5rFLklSzxqiY+0IKMnWLmlcMS02AKD+l8lXte+hlgtlILkgZZxHbx0lazt5i0ktFuG5qWr0wgSZxKDWhD2FMUjR65KUAyytlu2kNzwGTOWMcOgfrc61xARZNQGlx3EwlvKNb/ULkuFKIm3jk656I5dENKbOyOWc1lfO5YgZiHUWxT85LtquSFfeM0R9p7Jbd1NbEcQtpL8sCRUMrryVsaQnjWz725XyJv1vRKiRFMbdgSsJD4bUCVSJhzWwZ06iaOim8A/SWVrG5sgnfsvjmi5Ltd3s+7GZU0uMu7FW4g+8zLcW6Mlsr0X6fRI4ksssm32FBOkui4On7u++Z66PY+zHa0RN+MF1yKGuY7WMHz4jPihZqIVw9owS6mVKH3CnHgJ15AoccRxfzjiT9kRfxoOwdQ0rmTOc0xMrDpR4sJytYqhYqiwkMHWkqXmFyYF2Ts2Y3YhVAvCdExf07GAo1EvyE6OqvXfVWTNAgAAAAAAAAAAAAAAAAAAAAAAgPvlP9uRbytaDBBgAAAAAElFTkSuQmCC',
        deployInfo: {
            imageName: '',
            imageVersion: '',
            containerName: '',
            portMapping: '',
            envVar: '',
            volumeMounting: '',
        },
    },
    {
        name: 'kkTerminal',
        desc: i18n.global.k('kkTerminal是一个强大的Web SSH连接终端'),
        type: 1,
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABuElEQVR4nO3cUW7CMBBFUcPK3JWVrmzY2VRI/agEQhDb+M3MPVI+iRJfEoUQpzUAAAAAAAAAAAAAAPDIqa3VW07XFsyltebJl0sLwgQGyz+0mPpZoMKR4Q+iSKoYw/+WaUfJedaKivtWDDJtoyqbedl7O3QrO81YCacsMQQRQxAxBBFDEDFnoZt1190bkc2MX7k98L0wOTPvmJrAAJcM8owJDDJBAkeRs+ouqQkMdpkgr/6XYAIDXiLIq1G6wICXCZIlihwvHkWOF48ix4tHkePFo8jx4lHkePEocnxjlAtB7vnmKJ4hiMofVFiAU5aYXTG6QIwSQSxQjPRBLFiM1EEsYIy0QSxojJRBLHCMdEGix/BM80NuTyx+Da7/2sZ18Snmb1v5zbInn585C3bkB6acVXO9bfDz7zp6apSzYids0yAQ5EAMC7QvWxzZiT74YFxfsB+lT1mj0xFscpSR6RBpLnv/X7r2gc/O0HePpVKQ6JinnhFBxBBEDEHEECRxEOaZT8ARMsePYpBpG4V5IkzO9Eqvi438agzP9EZSxUc7PeKRwavGj+GKEgAAAAAAAAAAAACA9lm/UNy1KWEx6f4AAAAASUVORK5CYII=',
        deployInfo: {
            imageName: 'zyyzyykk/kkterminal',
            imageVersion: 'latest',
            containerName: 'kkTerminal',
            portMapping: '3000:3000',
            envVar: 'TITLE=kkTerminal\nAESKEY=' + generateRandomString(16),
            volumeMounting: '',
        },
    },
    {
        name: 'Draw.io',
        desc: i18n.global.k('Draw.io是一个开源的在线绘图工具'),
        type: 1,
        img: 'data:image/png;base64,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Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAMAUExURQAAAP////CHBfOJBeBtDNV4BP79/////v7+/f38+f79+//89/78+fvoz/337/CDAO+CAO+EAPCGAfCFAfCFAvCGAopNAvKJBPCHBO+HBOWABOOABNh5BNd5BM90BMBsA7loA/qNBfeLBfCIBe+FBe6DBe2DBemDBeaCBfCHBu6FBu2EBtN1Be+HB/CKCvGKDO+JDPGMD/GLD/CKEPGOFvGPGPGQGfGRG/GSG/CSHvGWI/OaLfGdNfOgOPOfOPOhO/OiP/OkQ/SpTPWwWvWxXvW1ZfW1Zva7dPbBf/nOmvrXrPnZsfrgv/viwvrhwfvixPzlyvzq1Pzs2f706P306f758/CBAO98AO9/AO+AAO59AO18AOt9AON8Be+DBuyBBuuABup/Bu2CB+l8B++WNO+gSvvmzv3v3/7y5f737+p8B+Z3COV3COZ4CemDGvfUsPjWsv769v359f77+P79/OZtAOVwAONzCeJxCdxwCclmCORzCuR0CuNzCuNwCvzy6fzz695jAN5mAN5kAN1jAN5nAt9mBN9oBd9pBt9qB99pCN9rCOBsCeBrCd9sCeBrCuJtC+FuC+BsC99tC8hjCsdiCsdhCsVgCno7BudwDONuDOBuDN9sDN9rDNhrC9dpC9JnC69VCeBtDdpqDOFuDuFwEuFyE+FxE+FyFOFwFeJzFuF0F+FzF+F0GOJ0GeJ1GuF0GuJ2G+F2HeN3HuJ4HuN5ION6IeN5I+N7I+N+J+N+KOSBLeSCMOWGNuaKPOaNQeeOQ+ePReeRR+eSSuiUTOiVTumXUumbWe2iYOqfX+uiY+uiZeukaOylauumbOynbu2sdu+zgfC7j/G+lPHDnPLEnfPFn/TJpfPLqfTMq/TNrPPMq/TPsPXRsvbStfXStfXUt/XTt/bWu/bXvPbYvvfbxPjdx/jfyvffyvjhzfniz/nk0vro2frp2vrq3fzx6Pz1795hAN1fAN1gAOuja/TKqfbStvfaw/nhz/vx6f307f759fzv5vzx6v339P///4Et8rYAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFF0lEQVRoge2ZX0xbdRTHv7fQe0tZoVjaMv4XKTzMZMZoosvI9EEGe1hiNPPBuM0HU1CXQBcNBgKRxKwmsGFcshkjyaLJXuYrhkQ3s+xflD2I6ALIOhgM2vKfQum9vffnA/96299tL20x0/Q8teec3/ncc3+/e87v/i5DsPei+RcYaUgakoakIWlIGpISyaQp2YKZBMNZNeMULRPdfq16jkmQAZCgWxWkeLqcdjnqpJRbix5MuV0hG+Vi1MqEXYpWUiZekwQDgCdaRZ14BTHJ/s2pH6h+Cee9LYTCRMjJUz1UbSYWb9HfBzQ7q45IfHDB4k0thK/OySn1hSnME8sV8yoHq4XUTuZW9cg0TdJq4Ccf3TtBCNH19ck1PdqbPxh8qpa7yom3UByF5/YdqVA1Wu3qyqDohpuLjjC2FELokl9U6zbvMYRxluW/Z0DcZJLsJ44yc038eUm2aTm6rDXueKkk3Rkvd1lPxaMkDWmA3XoqzsOSgh7vsJecrIiZi0qIV6S8JZNNnaO04HDMO6Y6E/HNSM08v12Uu0pOxhqrFtK/7t/XBABnOe4sAPCeiZWvNo0NKC+uSQFE95fn0BpYfubM6OiZQBOLlakHA+3bZoet5N3kIV4ihbz4aGrk3uDgvQGnFvo1MbyeOc4VnFZ89NVCLEe1XAHOTQ/U3b9f9+qTSWiMnNAb7tG9X3Fe1PaTwLC5rPetcd+KCehs95qaudDS+qTMpYI5DPoDozaT+jzdd/yX0yssALD+mY/xibWQl7k4bCW0hqAaYsn7k/tF0M3enWsDgDbfr7PcxYt5rEtOcb1RmTikWnzdnLXKD/mCmwre75vne8wvB+QUdJ94J2HIbMYo9yPbMXvb6NxQtOhvDQXZblMue17uaTO8lCiELzTq+OMnlhnnlqaFLI/5e6wvmNfkng57cXViEMsxLqsfV32/63d0urpZCRVFBuGS3FdvPx4dIOYStogEAPPaqOlmoOPBYrBjx9TavjAa5K4cs498AQDQbiXJFO0qE4thPUQIISGSc4fHac+QKDP/4ZmBq7hQE5IkSQotfralp5TrGJl4D2ZlMgCkab0fCJAXl8OMvVm5xIRg0eAhBgCIuKAcSBlimqu2ZG/Wcg2A9qtLj65Mt2xaXdpny3IJgANLPQDQJD0GzjtpgWJBQs/nlX0T9v/aNfjEMdcGxbVWWZoPYHvT1wnPbbdiE1acE5LJfR+hMuey7MYvVpcbuacrN2ULu4bUM9pApI6zG10A4DJWcZG2QJZC4YoFARP9hikxm3UlSKI3p88oRtqDEwnKGcD/52zlPwqhlJWnMBM1X3R2tbpItHcB37jxo1GgvFsrn18pQkRR0Efq3I82aleLa2w10uZ8GFJkKUJ+FtbflzcQfnxR2KpdwuJj+X5I/GDeH1VqtkSxCms945WBsGMlRnz45E7n1mVD+8rqdEbYFI3M3dDv3zXEC8tvn9aHJS9JS4Ydc/aUXxN+F0LLRqVuErszCvM3DNJ2JAKudcfo/HxMdvMJ26YcKdZGwniXOVqV3UA3ttLVu4a4YbuBr3cRLBEI4AbfeFAhlZRBANKPC3pHkpC4ZUW8Puy/nCQkXiZu2K6TZOeFApHkp3FuCI1Vzeojqjt8Nrojyo+0OnxBbTIkk7JpoWSyUKIl8n1aXw7skG/fN8rxpcaIsd0ffktZjJQPArBmipEJGmrt0X4UmatYpyxFGiTl8hS23zQkDUlD0pA0JA2hyz93WJ5gkjFSSQAAAABJRU5ErkJggg==',
        deployInfo: {
            imageName: 'jgraph/drawio',
            imageVersion: 'latest',
            containerName: 'drawio',
            portMapping: '8080:8080',
            envVar: '',
            volumeMounting: '/data/drawio:/usr/local/tomcat/webapps/draw/js',
        },
    },
];
