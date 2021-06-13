// 此文件作为 Generator 的核心入口
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () {                // 用于命令行的交互形式询问用户问题
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description:',
                default: 'static web app workflow'
            },
            {
                type: 'input',
                name: 'homepage',
                message: 'Your homepage',
                default: 'https://github.com/Jhon-zhou/zsj-pages#readme'
            },
            {
                type: 'input',
                name: 'author',
                message: 'Author name',
                default: 'Jhon-zhou'
            }
        ])
        .then(answers => {
            this.answers = answers
        })
    }

    writing () {
        // 把每一个文件都通过模板转换到目标路径
        const templates = [
            '.editorconfig',
            '.gitignore',
            'CHANGELOG.md',
            'LICENSE',
            'package.json',
            'README.md',
            'lib/index.js'
        ]
        templates.forEach( item => {
            // item => 每个文件路径
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}
