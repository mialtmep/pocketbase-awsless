[PocketBase](https://github.com/pocketbase/pocketbase) without AWS(S3) as I don't need it.

Builds faster and compiles into smaller executable smaller:

|         | Build time (s) | Binary size (MB) | Binary size (debug stripped) (MB)|
| ------- | -------------- | ---------------- | -------------------------------- |
| AWSful  | 37.7 ± 1.3     | 56.2             | 40.3                             |
| AWSless | 31.7 ± 0.1     | 46.0             | 33.0                             |

There are still some AWS transitive dependencies (as shown by `go.sum`), but these are not included in the final binary therefore does not bother me.

May remove additional features in the future if I feel like it (perhaps sending mail).
