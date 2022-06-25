
### 全局用户配置 
bash 
<!-- 每台计算机只需要执行一次 -->
$ git config --global user.name '***'
$ git config --global user.email '***'
<!-- 已执行 -->

1.项目构建,在项目的根目录创建文件(ERADME.md)
(.gitignore)

2.在.gitignore中存放需要忽略的文件或目录(不需要git管理的文件或目录)

3.在项目根目录执行 '$ git init' 进行仓库 初始化操作 (本地的仓库)

4.进行项目初始化'$npm  init -y' 有了package.json就不用初始化了
没有package.json就需要初始化一下


代码管理工具:
1.集中式 vsn
2.分布式 git gitee

### 本地仓库操作
bash

$ git status  查看git状态
% 添加管理(将文件或目录添加到git本地仓库的暂存区)
$ git add filename  将文件添加到暂存区
$ git add .         将当前目录的所有文件添加到暂存区
$ git add path      添加指定目录到暂存区
$ git add --all     添加所有内容到暂存区

$ git rm --cached filename 将指定文件移出暂存区


将暂存区的内容添加到本地仓库
$ git commit -m 'message'

查看提交日志
$ git log


<!-- 来回切换版本号 恢复版本 -->
$ git reset -hard 提交记录的前6位


查看意外删除的文件
$ git checkout  filename



### 远程仓库操作
设置远程仓库地址
$ git remote add origin https://github.com/roninLuo/tmall.com.git

创建并时而用m分支(默认使用master分支,不使用该命令)
git branch -M main

提交到远程仓库
git push -u origin 分支名(默认master)
未登录会失败git remote add origin https://gitee.com/roninLuo/tmall.com.git

查看 所有的地址源
git remote 

查看上传的地址源
git remote get-url 名称(源名称)


上传到指定的源 上传到设置的第二个源
git push -u origin2 master


克隆仓库
git clone 地址

更新仓库 
$ git pull origin master 