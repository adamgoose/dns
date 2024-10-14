# My DNS

My personal DNS configurations, managed by [dnscontrol].

## Usage

Ensure your [age] encryption key is stored in `~/config/.sops/age/keys.txt`.

Enter the flake environment, either with `direnv allow` or `nix develop`.

The `dnscontrol` command is wrapped by a devenv script (see [flake.nix]). The
"preview" and "push" commands are automatically wrapped with the appropriate
[sops] encantation. Otherwise, the script simply passes thru the provided
arguments to the `dnscontrol` binary.

### Preview Changes

```
dnscontrol preview
```

### Apply Changes

```
dnscontrol push
```

### Updating Credentials

```
sops creds.json
```

[dnscontrol]: https://docs.dnscontrol.org/
[age]: https://age-encryption.org
[sops]: https://getsops.io/
