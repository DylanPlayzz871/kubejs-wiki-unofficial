# Windows download warnings and release signing

The current development build is **unsigned**. Its product details and icon identify the application in Explorer; they do not create a verified publisher or grant SmartScreen reputation. Neither the EXE nor its ZIP should be described as publicly trusted or certified until a release has actually been signed and verified.

The reported startup message, "Microsoft Defender SmartScreen prevented an unrecognized app from starting," is a SmartScreen app-reputation warning. A browser's suspicious-download message may also come from its download protection. A named antivirus threat would require a separate malware-detection investigation; the unrecognized-app message by itself is not a malware scan result.

## Paths to public distribution

1. **Direct EXE downloads:** obtain a publicly trusted code-signing identity, complete its identity verification, and sign and timestamp every release. Use a consistent publisher identity. New signed releases can still show SmartScreen prompts while reputation develops. Self-signed certificates do not solve public distribution warnings.
2. **Microsoft Store packaged distribution:** create a Store developer account, package and submit the application, and complete Store review. Microsoft recommends Store distribution as the most reliable route for avoiding SmartScreen download warnings for Store-installed apps. The separate unsigned EXE hosted elsewhere does not inherit Store trust.

Microsoft's Artifact Signing service is a cloud signing option for direct distribution. It requires an Azure subscription, a signing account, public-trust identity verification, and a certificate profile. Its current entry price is listed as $9.99/month; check the provider's current pricing before subscribing. Individual public-trust eligibility and available regions are described in Microsoft's setup documentation. No billing account, signing identity, or certificate has been created by this project.

## Existing certificate in the Windows certificate store

If you already have a publicly issued code-signing certificate accessible through its hardware token/provider and the Windows certificate store:

```powershell
.\sign-release.ps1 -CheckOnly
.\sign-release.ps1 -CertificateThumbprint YOUR_40_CHARACTER_CERTIFICATE_THUMBPRINT
```

The script checks prerequisites, builds and tests, stages a copy, signs using SHA-256 and an RFC 3161 timestamp, verifies the signature and timestamp, and creates `artifacts\signed-release\VillagerWorkshop-Portable-Signed.zip` plus a SHA-256 checksum. The default store is `CurrentUser\My`; use `-CertificateStore LocalMachine` if appropriate. The private key stays with its existing key provider. Use the signing provider's public certificate and token setup instructions; do not send private keys or passwords in chat.

This local-certificate script has **not** been exercised with a real public signing certificate here because none is available. Its prerequisite detection and refusal to sign without a certificate were checked. A locally valid chain alone does not demonstrate that a private/enterprise certificate is trusted on other people's computers; public distribution needs a certificate from the public Windows trust ecosystem.

## Microsoft Artifact Signing

Artifact Signing uses its own cloud signing client or SignTool digest-signing extension, rather than the certificate-store thumbprint mode above. After creating and validating your account, use Microsoft's signing integration with the tested EXE, verify the resulting Authenticode signature, then package that signed EXE for upload. Account/resource details are needed before configuring that integration. Signing access belongs to the verified publisher, not to this app.

## Release handling

- Build and test before signing. Rebuilding or editing the signed EXE can invalidate its signature and creates a different file for reputation checks.
- Distribute the exact verified signed bytes. Version numbers and checksums help identify releases but do not establish trust by themselves.
- Do not disable Defender/SmartScreen, install a homemade root certificate on users' computers, or remove download-origin metadata as a distribution fix.
- If Defender reports a named malware detection, investigate that detection and use Microsoft's software-developer submission process for a suspected false positive. This is different from applying for consumer SmartScreen reputation; Microsoft says reputation develops organically.

Official references:

- [SmartScreen reputation for app developers](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/smartscreen-reputation)
- [Artifact Signing setup and public-trust prerequisites](https://learn.microsoft.com/en-us/azure/artifact-signing/quickstart)
- [SignTool signing and verification](https://learn.microsoft.com/en-us/windows/win32/seccrypto/signtool)
- [Submit a file for malware analysis](https://www.microsoft.com/en-us/wdsi/filesubmission/)
