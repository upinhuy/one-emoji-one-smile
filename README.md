# One Emoji, One Smile 🤗

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/upinhuy/one-emoji-one-smile/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/upinhuy/one-emoji-one-smile/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile bounty](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) on [make.fun](https://make.fun/r/hv9zk8y5).

## The entry

Exactly one emoji, nothing else — no words, no caption, no explanation:

**🤗**

A smiling face with open arms. Warm at first glance, friendly to any
stranger, and chosen rather than the first default smiley that comes
to mind.

## How it works

`main.ts` (Node, standard library only) writes the single emoji to
`/output/entry.txt` and verifies the file holds exactly that one
character. The sealed gate requires UTF-8 text of 1 to 8 characters,
not only white space — this entry is 1 character, 4 bytes.

```sh
node main.ts
cat /output/entry.txt  # 🤗
```

## License

MIT — see [LICENSE](LICENSE).
