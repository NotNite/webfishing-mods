# webfishing-mods

Mod list for WEBFISHING.

## Contributing

[Fork this repository](https://github.com/NotNite/webfishing-mods/fork), create a Markdown file in `src/content/mods`,  and [create a pull request](https://github.com/NotNite/webfishing-mods/compare). The Markdown file should have the following structure:

```yaml
---
title: ModName
id: ModID
author: list of authors
download: "URL to download the mod"
source: "optional URL for the source code"
---

Mod description goes here.

```

## Resources for making mods

- [GDWeave MODS.md](https://github.com/NotNite/GDWeave/blob/main/MODS.md#making-mods) (mod loader)
- [GodotSteam](https://github.com/GodotSteam/GodotSteam/releases/tag/v3.21) (Godot editor, change the app ID to `3146520`)
- [GDRETools](https://github.com/bruvzg/gdsdecomp) (game decompiler)
