function FindProxyForURL(url, host) {
    var charlesProxy = "PROXY  127.0.0.1:8888; DIRECT";
    var ssProxy      = "SOCKS5 127.0.0.1:1086; DIRECT";
    var otherProxy   = "PROXY  127.0.0.1:8888; SOCKS5 127.0.0.1:1086; DIRECT";

    if (shExpMatch(url,"*.gome*")
        || shExpMatch(url,"*uat.*")
        || shExpMatch(url,"*.tslive*")) {

        return charlesProxy;
    }
    
    
    if (isInNet(host, "10.2.0.0",  "255.255.0.0")) {
        return charlesProxy;
    }
    
    if (isInNet(dnsResolve(host), "10.2.0.0", "255.255.0.0")) {
        return charlesProxy;
    }



    if (shExpMatch(url,"*.imooc.*")) {
        return ssProxy;
    }

    if (shExpMatch(url,"*pan.baidu.com*")) {
        return ssProxy;
    }

    if (shExpMatch(url,"*google.com*")) {
        return ssProxy;
    }
    
    return otherProxy;
}