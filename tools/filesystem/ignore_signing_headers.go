package filesystem

import ()

// ignoreSigningHeaders excludes the listed headers
// from the request signing because some providers may alter them.
//
// See https://github.com/aws/aws-sdk-go-v2/issues/1816.

type ignoredHeadersKey struct{}
