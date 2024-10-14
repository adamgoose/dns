{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    devenv.url = "github:cachix/devenv/v1.3";
  };

  nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
  };

  outputs = inputs @ {
    flake-parts,
    nixpkgs,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [
        inputs.devenv.flakeModule
      ];
      systems = nixpkgs.lib.systems.flakeExposed;

      perSystem = {
        config,
        self',
        inputs',
        pkgs,
        system,
        ...
      }: {
        packages.default = pkgs.dnscontrol;

        devenv.shells.default = {
          # https://devenv.sh/reference/options/
          packages = [
            pkgs.sops
            config.packages.default
          ];

          scripts.dnscontrol.exec = ''
            case "$1" in
              "preview"|"push")
                sops exec-file creds.json "${pkgs.dnscontrol}/bin/dnscontrol $1 --creds {} --config dnsconfig.ts"
                ;;
              *)
                ${pkgs.dnscontrol}/bin/dnscontrol $@
                ;;
            esac
          '';
        };
      };
    };
}
