# WebMusic
## An in-browser JavaScript file for music playing

### Loading
To load the JavaScript file in your console, there is one requirement:
The protocol must be `https:`, any site can be used.

#### Loading: JavaScript File
First, download the JavaScript file.
Next, go to a website with a `https:` protocol.
Then, open the console and drag the downloaded file to the console.
Finally, press Enter, and WebMusic is loaded in your console!

#### Loading: Encrypted Code
First, go to a website with a `https:` protocol.
Next, open the console and type in `eval(atob('Ly8gV2ViTXVzaWMuanMKCmNvbnNvbGUuY2xlYXIoKTsKCmNvbnNvbGUubG9nKAogICAgYCVjV2ViTXVzaWMKJWNMb2FkaW5nLi4uYCwKICAgIGBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JywgLWFwcGxlLXN5c3RlbSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjsKICAgIGNvbG9yOiAjNDNhZTIxOwogICAgZm9udC1zaXplOiA0OHB4O2AsCiAgICBgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheScsIC1hcHBsZS1zeXN0ZW0sIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7CiAgICBjb2xvcjogI2ZmZmZmZjsKICAgIGZvbnQtc2l6ZTogMTJweDtgCikKCmNvbnN0IG11c2ljU2VsZWN0aW9uID0gewogICAgIkx1aXMgRm9uc2kgLSBEZXNwYWNpdG8iOiBuZXcgQXVkaW8oCiAgICAgICAgImh0dHBzOi8vaWE4MDAxMDQudXMuYXJjaGl2ZS5vcmcvNS9pdGVtcy9MdWlzRm9uc2lEZXNwYWNpdG9GdC5EYWRkeVlhbmtlZV8yMDE3MTIvTHVpcyUyMEZvbnNpJTIwLSUyMERlc3BhY2l0byUyMGZ0LiUyMERhZGR5JTIwWWFua2VlLm1wMyIKICAgICksCiAgICAiVGF5bG9yIFN3aWZ0IC0gTG9vayBXaGF0IFlvdSBNYWRlIE1lIERvIjogbmV3IEF1ZGlvKAogICAgICAgICJodHRwczovL2lhODAzMDA2LnVzLmFyY2hpdmUub3JnLzkvaXRlbXMvdGF5bG9yLXN3aWZ0LWxvb2std2hhdC15b3UtbWFkZS1tZS1kby90YXlsb3Itc3dpZnQtbG9vay13aGF0LXlvdS1tYWRlLW1lLWRvLm1wMyIKICAgICksCiAgICAiV2hhbSEgLSBMYXN0IENocmlzdG1hcyI6IG5ldyBBdWRpbygKICAgICAgICAiaHR0cHM6Ly9pYTgwMTUwNy51cy5hcmNoaXZlLm9yZy8yMi9pdGVtcy93aGFtLWxhc3QtY2hyaXN0bWFzLW9mZmljaWFsL1doYW0lMjAlMjBMYXN0JTIwQ2hyaXN0bWFzJTIwT2ZmaWNpYWwlMjBWaWRlby5tcDMiCiAgICApLAogICAgIlJpY2sgQXN0bGV5IC0gTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAiOiBuZXcgQXVkaW8oCiAgICAgICAgImh0dHBzOi8vYXJjaGl2ZS5vcmcvZG93bmxvYWQvUmlja19Bc3RsZXlfTmV2ZXJfR29ubmFfR2l2ZV9Zb3VfVXAvUmlja19Bc3RsZXlfTmV2ZXJfR29ubmFfR2l2ZV9Zb3VfVXAubXA0IgogICAgKSwKICAgICJBQkJBIC0gU09TIjogbmV3IEF1ZGlvKAogICAgICAgICJodHRwczovL2lhODAyMzA3LnVzLmFyY2hpdmUub3JnLzIxL2l0ZW1zL2FiYmEtc29zLW9mZmljaWFsLW11c2ljLXZpZGVvL0FCQkElMjAtJTIwU09TJTIwJTI4T2ZmaWNpYWwlMjBNdXNpYyUyMFZpZGVvJTI5Lm1wNCIKICAgICksCiAgICAiQUJCQSAtIEdpbW1lLCBHaW1tZSwgR2ltbWUhIChBIE1hbiBBZnRlciBNaWRuaWdodCkiOiBuZXcgQXVkaW8oCiAgICAgICAgImh0dHBzOi8vaWE4MDIzMDYudXMuYXJjaGl2ZS5vcmcvMTYvaXRlbXMvYWJiYS1naW1tZS1naW1tZS1naW1tZS1hLW1hbi1hZnRlci1taWRuaWdodF8yMDIxMDkvQUJCQSUyMC0lMjBHaW1tZSUyMSUyMEdpbW1lJTIxJTIwR2ltbWUlMjElMjAlMjhBJTIwTWFuJTIwQWZ0ZXIlMjBNaWRuaWdodCUyOS5tcDQiCiAgICApLAogICAgIkFCQkEgLSBTbGlwcGluZyBUaHJvdWdoIE15IEZpbmdlcnMiOiBuZXcgQXVkaW8oCiAgICAgICAgImh0dHBzOi8vaWE5MDQ2MDkudXMuYXJjaGl2ZS5vcmcvMjEvaXRlbXMvWVlZWS5BQkJBLlRoZS5WaXNpdG9ycy5ZWVlZLzE5ODElMjAtJTIwQUJCQSUyMC0lMjBUaGUlMjBWaXNpdG9ycy8wOC4lMjBBQkJBJTIwLSUyMFNsaXBwaW5nJTIwVGhyb3VnaCUyME15JTIwRmluZ2Vycy5tcDMiCiAgICApLAogICAgIkFCQkEgLSBPbmUgb2YgVXMiOiBuZXcgQXVkaW8oCiAgICAgICAgImh0dHBzOi8vaWE5MDQ2MDkudXMuYXJjaGl2ZS5vcmcvMjEvaXRlbXMvWVlZWS5BQkJBLlRoZS5WaXNpdG9ycy5ZWVlZLzE5ODElMjAtJTIwQUJCQSUyMC0lMjBUaGUlMjBWaXNpdG9ycy8wNi4lMjBBQkJBJTIwLSUyME9uZSUyME9mJTIwVXMubXAzIgogICAgKSwKICAgICJBQkJBIC0gTW9uZXksIE1vbmV5LCBNb25leSEiOiBuZXcgQXVkaW8oCiAgICAgICAgImh0dHBzOi8vaWE4MDQ1MDgudXMuYXJjaGl2ZS5vcmcvMTcvaXRlbXMvYWJiYS1tb25leS1tb25leS1tb25leS1vZmZpY2lhbC1tdXNpYy12aWRlby9BYmJhJTIwLSUyME1vbmV5JTJDJTIwTW9uZXklMkMlMjBNb25leSUyMCUyOE9mZmljaWFsJTIwTXVzaWMlMjBWaWRlbyUyOS5tcDQiCiAgICApLAogICAgIkFCQkEgLSBWb3VsZXotVm91cyI6IG5ldyBBdWRpbygKICAgICAgICAiaHR0cHM6Ly9pYTkwNDUwNC51cy5hcmNoaXZlLm9yZy8zL2l0ZW1zL2FiYmEtdm91bGV6LXZvdXMtdmlkZW8vQUJCQSUyMC0lMjBWb3VsZXotVm91cyUyMCUyOFZpZGVvJTI5Lm1wNCIKICAgICksCiAgICAiQUJCQSAtIFRoYW5rIFlvdSBGb3IgVGhlIE11c2ljIjogbmV3IEF1ZGlvKAogICAgICAgICJodHRwczovL2lhODA0NTA2LnVzLmFyY2hpdmUub3JnLzI5L2l0ZW1zL2FiYmEtdGhhbmsteW91LWZvci10aGUtbXVzaWMvQWJiYSUyMC0lMjBUaGFuayUyMFlvdSUyMEZvciUyMFRoZSUyME11c2ljLm1wNCIKICAgICkKfTsgLy8gRXhhbXBsZSBtdXNpYywgcmVwbGFjZWFibGUKCmZvciAobXVzaWNJdGVtIGluIG11c2ljU2VsZWN0aW9uKSB7CiAgICBtdXNpY1NlbGVjdGlvblttdXNpY0l0ZW1dLmxvb3BlZCA9IHRydWU7Cn07Cgpjb25zdCBjaG9vc2VTb25nID0gbmFtZSA9PiB7CiAgICBmb3IgKG11c2ljSXRlbSBpbiBtdXNpY1NlbGVjdGlvbikgewogICAgICAgIG11c2ljU2VsZWN0aW9uW211c2ljSXRlbV0ucGF1c2UoKTsKICAgICAgICBtdXNpY1NlbGVjdGlvblttdXNpY0l0ZW1dLmN1cnJlbnRUaW1lID0gMDsKICAgIH07CgogICAgaWYgKCFtdXNpY1NlbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgewogICAgICAgIHJldHVybiBudWxsOwogICAgfTsKCiAgICBtdXNpY1NlbGVjdGlvbltuYW1lXS5wbGF5KCk7CiAgICBjb25zb2xlLmxvZygKICAgICAgICBgJWNXZWJNdXNpYwolY05vdyBwbGF5aW5nOiBgLAogICAgICAgIGBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JywgLWFwcGxlLXN5c3RlbSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjsKICAgICAgICBjb2xvcjogIzQzYWUyMTsKICAgICAgICBmb250LXNpemU6IDQ4cHg7YCwKICAgICAgICBgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheScsIC1hcHBsZS1zeXN0ZW0sIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7CiAgICAgICAgY29sb3I6ICNmZmZmZmY7CiAgICAgICAgZm9udC1zaXplOiAxMnB4O2AKICAgICkKfTsKCmNvbnN0IGNob29zZVNvbmdJbmRleCA9IGluZGV4ID0+IHsKICAgIGNob29zZVNvbmcoT2JqZWN0LmtleXMobXVzaWNTZWxlY3Rpb24pW2luZGV4XSk7Cn0KCmNvbnNvbGUubG9nKAogICAgYCVjV2ViTXVzaWMKJWNJZiB5b3UgYXJlIHNlZWluZyB0aGlzLCB0aGF0IG1lYW5zIHRoYXQgdGhlIEpTIGZpbGUgc3VjY2Vzc2Z1bGx5IGxvYWRlZCB3aXRoIG5vIGVycm9ycy5gLAogICAgYGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknLCAtYXBwbGUtc3lzdGVtLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOwogICAgY29sb3I6ICM0M2FlMjE7CiAgICBmb250LXNpemU6IDQ4cHg7YCwKICAgIGBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JywgLWFwcGxlLXN5c3RlbSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjsKICAgIGNvbG9yOiAjZmZmZmZmOwogICAgZm9udC1zaXplOiAxMnB4O2AKKQoKY29uc3Qgc3RvcFNvbmdzID0gKCkgPT4gewogICAgZm9yIChtdXNpY0l0ZW0gaW4gbXVzaWNTZWxlY3Rpb24pIHsKICAgICAgICBtdXNpY1NlbGVjdGlvblttdXNpY0l0ZW1dLnBhdXNlKCk7CiAgICAgICAgbXVzaWNTZWxlY3Rpb25bbXVzaWNJdGVtXS5jdXJyZW50VGltZSA9IDA7CiAgICB9OwoKICAgIGNvbnNvbGUubG9nKAogICAgICAgIGAlY1dlYk11c2ljCiVjQWxsIG11c2ljIGhhcyBiZWVuIHN0b3BwZWQuYCwKICAgICAgICBgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheScsIC1hcHBsZS1zeXN0ZW0sIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7CiAgICAgICAgY29sb3I6ICM0M2FlMjE7CiAgICAgICAgZm9udC1zaXplOiA0OHB4O2AsCiAgICAgICAgYGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknLCAtYXBwbGUtc3lzdGVtLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOwogICAgICAgIGNvbG9yOiAjZmZmZmZmOwogICAgICAgIGZvbnQtc2l6ZTogMTJweDtgCiAgICApCn0K'))`.
Finally, press Enter, and WebMusic is loaded in your console!

