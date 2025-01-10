// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

// Providers:
var REG_NONE = NewRegistrar("none"); // No registrar.
var REG_R53 = NewRegistrar("r53");
var DNS_BIND = NewDnsProvider("bind");
var DNS_R53 = NewDnsProvider("r53");

// Domains:
D(
  "enge.me",
  REG_R53,
  // DnsProvider(DNS_BIND),
  DnsProvider(DNS_R53),
  NAMESERVER_TTL(172800),
  IGNORE("home", "A"),
  //@ts-ignore
  R53_ALIAS("@", "A", "home.enge.me."),
  CNAME("*", "@"),
  CNAME("learn", "traefik.nonprod-cmh.truss.bridgeops.sh."),
  CNAME("learn-prod", "traefik.prod-cmh.truss.bridgeops.sh."),
  CNAME(
    "protonmail2._domainkey",
    "protonmail2.domainkey.dgq2ku4uxqxz2gn7o3vzpifn3y4n3ip6awdr2zbchr4fddqfevorq.domains.proton.ch."
  ),
  CNAME(
    "protonmail3._domainkey",
    "protonmail3.domainkey.dgq2ku4uxqxz2gn7o3vzpifn3y4n3ip6awdr2zbchr4fddqfevorq.domains.proton.ch."
  ),
  CNAME(
    "protonmail._domainkey",
    "protonmail.domainkey.dgq2ku4uxqxz2gn7o3vzpifn3y4n3ip6awdr2zbchr4fddqfevorq.domains.proton.ch."
  ),
  MX("@", 10, "mail.protonmail.ch."),
  MX("@", 20, "mailsec.protonmail.ch."),
  TXT("_dmarc", "v=DMARC1; p=none"),
  TXT(
    "@",
    "google-site-verification=KI7RyjOTzXGZOVtcX7mpPrZIU3eMN4ATiHDWFR2JAY0"
  ),
  TXT("@", "protonmail-verification=555c0da4eabb1361d6e7360334f0b2b8e1d4b2e4"),
  TXT("@", "v=spf1 include:_spf.protonmail.ch mx ~all")
);

D(
  "engeson.com",
  REG_R53,
  DnsProvider(DNS_BIND),
  DnsProvider(DNS_R53),
  NAMESERVER_TTL(172800),
  CNAME("_domainconnect", "connect.domains.google.com."),
  CNAME("page", "pages-demo-4aa.pages.dev."),
  CNAME("traefik", "06d53327-6d15-47c4-8658-22a58d770440.cfargotunnel.com."),
  MX("@", 1, "aspmx.l.google.com."),
  MX("@", 5, "alt1.aspmx.l.google.com."),
  MX("@", 5, "alt2.aspmx.l.google.com."),
  MX("@", 10, "alt3.aspmx.l.google.com."),
  MX("@", 10, "alt4.aspmx.l.google.com.")
);

D(
  "riellfamily.com",
  REG_R53,
  DnsProvider(DNS_BIND),
  DnsProvider(DNS_R53),
  NAMESERVER_TTL(172800),
  A("home", "184.4.88.98"),
  CNAME("*", "home"),
  CNAME("mail", "ghs.googlehosted.com."),
  TXT(
    "@",
    "google-site-verification=T6THk7fXkIaLTzlr6XOKF6dHNmYP_UqXwXaw8q7j-Ds"
  ),
  MX("@", 1, "aspmx.l.google.com."),
  MX("@", 5, "alt1.aspmx.l.google.com."),
  MX("@", 5, "alt2.aspmx.l.google.com."),
  MX("@", 10, "alt3.aspmx.l.google.com."),
  MX("@", 10, "alt4.aspmx.l.google.com."),
  CNAME("2yi3v4prxm2x", "gv-tew5fjhlg5ypdx.dv.googlehosted.com.")
);

D(
  "bplasticsolutions.com",
  REG_NONE,
  DnsProvider(DNS_BIND),
  DnsProvider(DNS_R53),
  NAMESERVER_TTL(172800),
  A("@", "75.2.60.5"),
  CNAME("_domainconnect", "connect.domains.google.com."),
  CNAME("email.mg", "mailgun.org."),
  CNAME("mail", "ghs.googlehosted.com."),
  CNAME("www", "bplascom.netlify.app.")
);

D(
  "midtech-sales.com",
  REG_R53,
  DnsProvider(DNS_BIND),
  DnsProvider(DNS_R53),
  NAMESERVER_TTL(172800),
  A("@", "107.170.190.210"),
  MX("@", 1, "aspmx.l.google.com."),
  MX("@", 5, "alt1.aspmx.l.google.com."),
  MX("@", 5, "alt2.aspmx.l.google.com."),
  MX("@", 10, "alt3.aspmx.l.google.com."),
  MX("@", 10, "alt4.aspmx.l.google.com."),
  TXT("@", "v=spf1 include:_spf.google.com ~all"),
  TXT(
    "google._domainkey",
    "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgZAmJYAl3O0BIgWSwI2EKHgDHlz0A38HcG07lGHUnm661d7EWJOHEjbUJrJAOI0+rO2G4gq32vPB1Z5A76AAplmdzowRjYM1pWdLWsJw51XMugr7pVctdoTijMQIjFQH/wKd+SPqY9srFUwWw3gJD1zk8JS3iCQ9T/AHsdA2rNzIJ2c8HnhrWTVvGjSJbrlI7B3Ia67560PWR5JgKK9yr0HsLxsS4BfxZUkcJVzbOmSWa32zaCmp1NSXCctpou8ghB3tJtdFy9XO2s9Lo5yn6+LNlOizXizRetEdaZe8qjbtYgz3shhdBLNHY5gNw31KPjJrADOTjR3dEco2PpYQ3QIDAQAB"
  ),
  CNAME("calendar", "ghs.googlehosted.com."),
  CNAME("docs", "ghs.googlehosted.com."),
  CNAME("mail", "ghs.googlehosted.com."),
  CNAME("sites", "ghs.googlehosted.com."),
  CNAME("www", "@"),
  CNAME("google2169fce7652f15d1", "google.com."),
  CNAME("d237byov35ko", "gv-syznmy6c6m6d5u.dv.googlehosted.com.")
);

D(
  "no-bellind.com",
  REG_R53,
  DnsProvider(DNS_BIND),
  DnsProvider(DNS_R53),
  NAMESERVER_TTL(172800),
  MX("@", 1, "aspmx.l.google.com."),
  MX("@", 5, "alt1.aspmx.l.google.com."),
  MX("@", 5, "alt2.aspmx.l.google.com."),
  MX("@", 10, "alt3.aspmx.l.google.com."),
  MX("@", 10, "alt4.aspmx.l.google.com."),
  TXT("@", "v=spf1 include:_spf.google.com ~all"),
  CNAME("calendar", "ghs.googlehosted.com."),
  CNAME("docs", "ghs.googlehosted.com."),
  CNAME("mail", "ghs.googlehosted.com."),
  CNAME("sites", "ghs.googlehosted.com.")
);
