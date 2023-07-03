const github_proxy = "https://fastly.jsdelivr.net/gh/"

let prototype = {
    port: 7890,
    "socks-port": 7891,
    "mixed-port": 7890,
    "allow-lan": false,
    "bind-address": '*',
    mode: "Rule",
    "log-level": "info",
    ipv6: true,
    "external-controller": "127.0.0.1:9090",
    dns: {
        enable: false,
        listen: "0.0.0.0:53",
        ipv6: false,
        "default-nameserver": ["114.114.114.114", "223.5.5.5"],
        "enhanced-mode": "fake-ip",
        "fake-ip-range": "198.18.0.1/16",
        nameserver: ["114.114.114.114", "223.5.5.5"],
        fallback: ["8.8.8.8", "1.1.1.1"],
        "fallback-filter": {
            geoip: true,
            ipcidr: ["240.0.0.0/4", "0.0.0.0/32"]
        },
    },
    proxies: [],
    "proxy-groups": [
        {
            name: "节点选择",
            type: "select",
            proxies: ["自动选择", "故障转移", "负载均衡", "香港节点组", "台湾节点组", "美国节点组", "日本节点组", "DIRECT"]
        },
        {name: "哔哩哔哩", type: "select", proxies: ["DIRECT", "节点选择"]},
        {name: "动画疯", type: "select", proxies: ["节点选择"]},
        {name: "Steam", type: "select", proxies: ["DIRECT", "节点选择"]},
        {name: "Google", type: "select", proxies: ["节点选择"]},
        {name: "Youtube", type: "select", proxies: ["节点选择"]},
        {name: "Telegram", type: "select", proxies: ["节点选择"]},
        {name: "Apple", type: "select", proxies: ["DIRECT", "节点选择"]},
        {name: "Microsoft", type: "select", proxies: ["DIRECT", "节点选择"]},
        {name: "国内直连", type: "select", proxies: ["DIRECT", "节点选择"]},
        {name: "漏网之鱼", type: "select", proxies: ["节点选择", "DIRECT"]},
        {name: "手动控制", type: "select", proxies: ["DIRECT", "节点选择", "REJECT"]},
        {name: "下载程序", type: "select", proxies: ["DIRECT", "节点选择"]},
        {name: "香港节点组", type: "url-test", url: "http://www.gstatic.com/generate_204", interval: 300},
        {name: "台湾节点组", type: "url-test", url: "http://www.gstatic.com/generate_204", interval: 300},
        {name: "美国节点组", type: "url-test", url: "http://www.gstatic.com/generate_204", interval: 300},
        {name: "日本节点组", type: "url-test", url: "http://www.gstatic.com/generate_204", interval: 300},
        {name: "自动选择", type: "url-test", url: "http://www.gstatic.com/generate_204", interval: 300},
        {name: "故障转移", type: "fallback", url: "http://www.gstatic.com/generate_204", interval: 300},
        {name: "负载均衡", type: "load-balance", url: "http://www.gstatic.com/generate_204", interval: 300}
    ],
    "rule-providers": {
        //苹果
        apple: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "Semporia/Clash@master/Rule/Apple.yaml",
            path: "./ruleset/apple.yaml",
            interval: 86400
        },
        //代理
        proxy: {
            type: "http",
            behavior: "domain",
            url: github_proxy + "Loyalsoldier/clash-rules@release/proxy.txt",
            path: "./ruleset/proxy.yaml",
            interval: 86400
        },
        //可直连
        direct: {
            type: "http",
            behavior: "domain",
            url: github_proxy + "Semporia/Clash@master/Rule/China.yaml",
            path: "./ruleset/direct.yaml",
            interval: 86400
        },
        //私有地址
        private: {
            type: "http",
            behavior: "domain",
            url: github_proxy + "Loyalsoldier/clash-rules@release/private.txt",
            path: "./ruleset/private.yaml",
            interval: 86400
        },
        //谷歌
        google: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "Semporia/Clash@master/Rule/Google.yaml",
            path: "./ruleset/google.yaml",
            interval: 86400
        },
        //微软
        microsoft: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "Semporia/Clash@master/Rule/Microsoft.yaml",
            path: "./ruleset/microsoft.yaml",
            interval: 86400
        },
        //steam
        steam: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "Semporia/Clash@master/Rule/Steam.yaml",
            path: "./ruleset/steam.yaml",
            interval: 86400
        },
        //电报
        telegram: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "Semporia/Clash@master/Rule/Telegram.yaml",
            path: "./ruleset/telegram.yaml",
            interval: 86400
        },
        //油管
        youtube: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "Semporia/Clash@master/Rule/YouTube.yaml",
            path: "./ruleset/youtube.yaml",
            interval: 86400
        },
        //比特下载程序以及v2ray等软件
        applications: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "Loyalsoldier/clash-rules@release/applications.txt",
            path: "./ruleset/applications.yaml",
            interval: 86400
        },
        //手动控制
        custom: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "kafuumi/clash_rules@master/ruleset/custom.yaml",
            path: "./ruleset/custom.yaml",
            interval: 86400
        },
        //动画疯
        donghuafeng: {
            type: "http",
            behavior: "domain",
            url: github_proxy + "kafuumi/clash_rules@master/ruleset/donghuafeng.yaml",
            path: "./ruleset/donghuafeng.yaml",
            interval: 86400
        },
        //哔哩哔哩
        bilibili: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "kafuumi/clash_rules@master/ruleset/bilibili.yaml",
            path: "./ruleset/bilibili.yaml",
            interval: 86400
        },
        //额外添加的直连规则
        direct_addition: {
            type: "http",
            behavior: "classical",
            url: github_proxy + "kafuumi/clash_rules@master/ruleset/direct_add.yaml",
            path: "./ruleset/direct_add.yaml",
            interval: 86400
        }
    },
    rules: [
        "DOMAIN,clash.razord.top,DIRECT",
        "DOMAIN,yacd.haishan.me, DIRECT",
        "RULE-SET,custom,手动控制",
        "RULE-SET,direct_addition,国内直连",
        "RULE-SET,applications,下载程序",
        "RULE-SET,private,DIRECT",
        "RULE-SET,apple,Apple",
        "RULE-SET,bilibili,哔哩哔哩",
        "RULE-SET,donghuafeng,动画疯",
        "RULE-SET,google,Google",
        "RULE-SET,microsoft,Microsoft",
        "RULE-SET,telegram,Telegram",
        "RULE-SET,steam,Steam",
        "RULE-SET,youtube,Youtube",
        "RULE-SET,proxy,节点选择",
        "RULE-SET,direct,国内直连",
        "GEOIP,CN,国内直连",
        "MATCH,漏网之鱼"
    ]
}

module.exports.parse = async (raw, {axios, yaml, notify, console}, {name, url, interval, selected}) => {
    const obj = yaml.parse(raw)
    let proxies = []
    let tw = []
    let hk = []
    let usa = []
    let jp = []

    let regHK = /HK|香港|Hong Kong/i
    let regTW = /TW|台湾|TaiWan/i
    let regUSA = /USA|United States|美国/i
    let regJP = /JP|Japan|日本/i
    for (let i = 0; i < obj.proxies.length; i++) {
        let p = obj.proxies[i]
        let pn = p.name

        prototype.proxies.push(p)
        proxies.push(pn)
        //根据名称分类
        if (pn.match(regHK)) {
            hk.push(pn)
        } else if (pn.match(regTW)) {
            tw.push(pn)
        } else if (pn.match(regUSA)) {
            usa.push(pn)
        } else if (pn.match(regJP)) {
            jp.push((pn))
        }
    }

    const groups = ["国内直连", "漏网之鱼", "手动控制", "下载程序"]
    for (let i = 0; i < prototype['proxy-groups'].length; i++) {
        let pg = prototype['proxy-groups'][i]
        let name = pg.name
        if (groups.includes(name)) {
            continue
        }
        if (pg.proxies === undefined) {
            pg.proxies = []
        }
        if ((name === "哔哩哔哩" || name === "动画疯") && (hk.length !== 0 || tw.length !== 0)) {
            pg.proxies = pg.proxies.concat(hk, tw)
            continue
        }

        if (name === "台湾节点组" && tw.length !== 0) {
            pg.proxies = pg.proxies.concat(tw)
            continue
        }
        if (name === "香港节点组" && hk.length !== 0) {
            pg.proxies = pg.proxies.concat(hk)
            continue
        }
        if (name === "日本节点组" && jp.length !== 0) {
            pg.proxies = pg.proxies.concat(jp)
            continue
        }
        if (name === "美国节点组" && usa.length !== 0) {
            pg.proxies = pg.proxies.concat(usa)
            continue
        }
        pg.proxies = pg.proxies.concat(proxies)
    }
    return yaml.stringify(prototype)
}
