사실 개인 프로젝트이기 때문에 원격 저장소 연동이 필수는 아니라고 생각한다.

하지만 언제든 코드를 확인하고 개발할 수 있도록 하고 싶기도 했고, 무엇보다 백업을 위해서 Github에 연결하였다. 블로그 프로젝트를 개발하는 과정에서 Github 연동한 내용을 간략하게 정리하고자 한다.

# Repository 생성
로컬에서 작업한 프로젝트를 Github에 업로드 및 연동하기 위해서는 `Repository`를 생성해야 한다.
##
좌측 상단의 + 버튼 클릭 > New repository 클릭하면

![Github repository 생성 캡처 이미지](/images/posts/blog/part4/github_new_repository.png)

##
아래와 같은 화면을 볼 수 있다.

![Github repository 정보 입력 캡처 이미지](/images/posts/blog/part4/github_repository.jpg)

## ✔️ Repository name
- 프로젝트 이름 (예. blog, blog-client 등)
- 원하는 이름으로 생성하면 된다.
## ✔️ Description
- 프로젝트 설명
- 선택항목이라 프로젝트 설명을 간단하게 작성하였다.
## ✔️ Public or Private
- 프로젝트의 비공개/공개 여부에 따라 선택
- 나는 우선 비공개로 설정했고, 추후에 공개 전환을 생각하고 있다.
## ✔️ Add a README file
- README 파일 생성 여부에 따라 선택 (참고. README 파일은 프로젝트 설명, 실행 방법 등을 기재하는 파일이다.)
- 나는 로컬에서 프로젝트 생성할 때 자동으로 README.md 파일이 생성되었기 때문에 체크하지 않았다.
## ✔️ Add .gitignore
- `.gitignore` 파일 생성 여부에 따라 선택 (참고. `.gitignore` 파일에 github에 업로드하기에 불필요하거나 민감한 정보가 포함된 파일명을 작성github 업로드를 제한할 수 있다.)
- 해당 파일 또한 로컬 프로젝트에 이미 생성되어 있으므로 체크하지 않았다.
## ✔️ Choose a lisence
- 라이센스 선택
- 해당 항목도 따로 선택하지 않았다.

# Github 연동
아래 명령어를 입력하여 어렵지 않게 Github 연동을 완료할 수 있었다.

```bash
git remote add origin [내 깃허브 주소]
git push -u origin main
```


