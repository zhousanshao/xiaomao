// story.js - 优化后的剧情模式数据与逻辑
const storyData = {
    // 剧情一：张总的离职
    "story1": {
        id: "story1",
        title: "张总的离职",
        chapters: [
            {
                id: "chapter1",
                title: "清晨的异样",
                content: "周一清晨，阳光透过窗户洒进办公室。\n但你发现张总的座位异常整洁，连他最爱的盆栽都不见了...",
                background: "https://pic1.imgdb.cn/item/693a7f6c0edaae20ec56f9fc.jpg",
                characters: [
                    {
                        id: "niangao",
                        name: "年糕",
                        img: "https://s41.ax1x.com/2025/12/11/pZKQwhd.png",
                        position: "left",
                        expression: "疑惑"
                    }
                ],
                choices: [
                    { text: "询问年糕发生了什么", nextChapter: "chapter2" },
                    { text: "检查张总的办公桌", nextChapter: "chapter3" }
                ]
            },
            {
                id: "chapter2",
                title: "年糕的线索",
                content: "年糕跳上你的桌子，用爪子推过来一张纸条：\n『我要去追寻真正的自我了，年糕和小宝就拜托你了。\n——张儒松』",
                background: "https://s41.ax1x.com/2025/12/11/pZKQYnK.png",
                characters: [
                    {
                        id: "niangao",
                        name: "年糕",
                        img: "https://s41.ax1x.com/2025/12/11/pZKQwhd.png",
                        position: "center",
                        expression: "担忧"
                    }
                ],
                choices: [
                    { text: "寻找张总的下落", nextChapter: "chapter4" },
                    { text: "先照顾好两只小猫", nextChapter: "chapter5" }
                ]
            },
            {
                id: "chapter3",
                title: "空荡的抽屉",
                content: "抽屉里只剩下一本相册。\n翻开第一页，是张总与年糕、小宝的合影，照片背后写着：\n『最好的时光，最不舍的离别』",
                background: "https://pic1.imgdb.cn/item/693a7d3f0edaae20ec56ea7a.png",
                characters: [],
                choices: [
                    { text: "继续翻看相册", nextChapter: "chapter6" },
                    { text: "打电话联系张总", nextChapter: "chapter7" }
                ]
            },
            {
                id: "chapter4",
                title: "意外的访客",
                content: "正当你准备出门时，狗策划周少突然出现：\n『我知道张总去哪了，但你要先帮我解决一个Bug...』",
                background: "https://pic1.imgdb.cn/item/693a7f6c0edaae20ec56f9fc.jpg",
                characters: [
                    {
                        id: "zhoushao",
                        name: "狗策划周少",
                        img: "https://s41.ax1x.com/2025/12/10/pZu4S9e.png",
                        position: "center",
                        expression: "神秘"
                    },
                    {
                        id: "niangao",
                        name: "年糕",
                        img: "https://s41.ax1x.com/2025/12/11/pZKQwhd.png",
                        position: "left",
                        expression: "警惕"
                    }
                ],
                choices: [
                    { text: "答应周少的请求", nextChapter: "battle_zhoushao" },
                    { text: "拒绝，继续寻找张总", nextChapter: "chapter8" }
                ]
            },
            {
                id: "chapter5",
                title: "照顾小猫",
                content: "你决定先照顾好年糕和小宝。\n年糕似乎很信任你，小宝虽然警惕，但也被你准备的美食征服了。",
                background: "https://pic1.imgdb.cn/item/693a7f6c0edaae20ec56f9fc.jpg",
                characters: [
                    {
                        id: "niangao",
                        name: "年糕",
                        img: "https://s41.ax1x.com/2025/12/11/pZKQwhd.png",
                        position: "left",
                        expression: "开心"
                    },
                    {
                        id: "xiaobao",
                        name: "小宝",
                        img: "https://s41.ax1x.com/2025/12/09/pZuKv7Q.png",
                        position: "right",
                        expression: "满足"
                    }
                ],
                choices: [
                    { text: "继续寻找张总", nextChapter: "chapter4" },
                    { text: "等待张总自己回来", nextChapter: "chapter_end_wait" }
                ]
            },
            {
                id: "chapter6",
                title: "相册的秘密",
                content: "相册里记录着张总与宠物们的点点滴滴。\n最后一页夹着一张名片：『梦想宠物训练师 - 张儒松』",
                background: "https://pic1.imgdb.cn/item/693a80d297f6538bc4c5a929.png",
                characters: [],
                choices: [
                    { text: "按照名片地址寻找", nextChapter: "chapter9" },
                    { text: "联系名片上的电话", nextChapter: "chapter10" }
                ]
            },
            {
                id: "chapter7",
                title: "电话另一端",
                content: "电话接通了，但接电话的是个陌生人：\n『这里是梦想宠物训练中心，张教练正在上课...』",
                background: "https://pic1.imgdb.cn/item/693a816e97f6538bc4c5a953.jpg",
                characters: [],
                choices: [
                    { text: "立即前往训练中心", nextChapter: "chapter9" },
                    { text: "留言请张总回电", nextChapter: "chapter11" }
                ]
            },
            {
                id: "chapter8",
                title: "独自寻找",
                content: "你拒绝了周少的请求，决定自己寻找张总。\n但街上人来人往，你完全不知道该从哪里找起...",
                background: "https://pic1.imgdb.cn/item/693a818c97f6538bc4c5a958.jpg",
                characters: [
                    {
                        id: "niangao",
                        name: "年糕",
                        img: "https://s41.ax1x.com/2025/12/11/pZKQwhd.png",
                        position: "left",
                        expression: "迷茫"
                    }
                ],
                choices: [
                    { text: "返回找周少帮忙", nextChapter: "chapter4" },
                    { text: "去宠物店打听消息", nextChapter: "chapter12" }
                ]
            },
            {
                id: "chapter9",
                title: "梦想宠物训练中心",
                content: "你找到了名片上的地址，一家新开的宠物训练中心。\n透过玻璃窗，你看到了正在给狗狗上课的张总...",
                background: "https://pic1.imgdb.cn/item/693a816e97f6538bc4c5a953.jpg",
                characters: [
                    {
                        id: "zhangrusong",
                        name: "张儒松",
                        img: "https://s41.ax1x.com/2025/12/09/pZulj0O.jpg",
                        position: "center",
                        expression: "专注"
                    }
                ],
                choices: [
                    { text: "推门进去", nextChapter: "chapter_end_success" },
                    { text: "在外面观察", nextChapter: "chapter13" }
                ]
            },
            {
                id: "chapter_end_success",
                title: "重逢",
                content: "张总看到你，脸上露出了笑容：\n『谢谢你照顾年糕和小宝。我终于找到了自己想做的事...\n宠物们我会接回去的，以后常来玩！』\n\n【剧情完成】",
                background: "https://pic1.imgdb.cn/item/693a816e97f6538bc4c5a953.jpg",
                characters: [
                    {
                        id: "zhangrusong",
                        name: "张儒松",
                        img: "https://s41.ax1x.com/2025/12/09/pZulj0O.jpg",
                        position: "center",
                        expression: "欣慰"
                    }
                ],
                choices: [
                    { text: "返回剧情选择", nextChapter: "return_to_selection" }
                ]
            },
            {
                id: "chapter_end_wait",
                title: "耐心等待",
                content: "你选择耐心等待。\n一周后，张总带着好消息回来了：\n『我参加了宠物训练师培训，现在可以更好地照顾它们了！』\n\n【剧情完成】",
                background: "https://pic1.imgdb.cn/item/693a7f6c0edaae20ec56f9fc.jpg",
                characters: [
                    {
                        id: "zhangrusong",
                        name: "张儒松",
                        img: "https://s41.ax1x.com/2025/12/09/pZulj0O.jpg",
                        position: "center",
                        expression: "开心"
                    }
                ],
                choices: [
                    { text: "返回剧情选择", nextChapter: "return_to_selection" }
                ]
            }
        ],
        // 特殊章节：触发对战
        "battle_zhoushao": {
            id: "battle_zhoushao",
            type: "battle",
            enemy: "zhoushao",
            winChapter: "chapter9",
            loseChapter: "chapter8"
        },
        // 其他特殊章节
        "chapter10": {
            id: "chapter10",
            title: "电话留言",
            content: "你给张总留了言，但没有收到回电。\n几天后，你决定亲自去找她...",
            background: "https://pic1.imgdb.cn/item/693a818c97f6538bc4c5a958.jpg",
            characters: [],
            choices: [
                { text: "前往训练中心", nextChapter: "chapter9" }
            ]
        },
        "chapter11": {
            id: "chapter11",
            title: "等待回电",
            content: "你在办公室等了很久，但没有等到张总的回电。\n年糕似乎越来越不安...",
            background: "https://pic1.imgdb.cn/item/693a7f6c0edaae20ec56f9fc.jpg",
            characters: [
                {
                    id: "niangao",
                    name: "年糕",
                    img: "https://s41.ax1x.com/2025/12/11/pZKQwhd.png",
                    position: "left",
                    expression: "焦虑"
                }
            ],
            choices: [
                { text: "不再等待，主动寻找", nextChapter: "chapter4" }
            ]
        },
        "chapter12": {
            id: "chapter12",
            title: "宠物店线索",
            content: "宠物店老板认出了张总的照片：\n『他上周来买了很多宠物训练用品，说要开训练中心...』",
            background: "https://pic1.imgdb.cn/item/693a816e97f6538bc4c5a953.jpg",
            characters: [],
            choices: [
                { text: "询问训练中心地址", nextChapter: "chapter9" }
            ]
        },
        "chapter13": {
            id: "chapter13",
            title: "默默观察",
            content: "你看到张总与宠物们相处得很愉快，脸上洋溢着幸福的笑容。\n或许这就是她想要的生活吧...",
            background: "https://pic1.imgdb.cn/item/693a816e97f6538bc4c5a953.jpg",
            characters: [
                {
                    id: "zhangrusong",
                    name: "张儒松",
                    img: "https://s41.ax1x.com/2025/12/09/pZulj0O.jpg",
                    position: "center",
                    expression: "幸福"
                }
            ],
            choices: [
                { text: "默默离开，不打扰她", nextChapter: "chapter_end_observe" }
            ]
        },
        "chapter_end_observe": {
            id: "chapter_end_observe",
            title: "理解与祝福",
            content: "你选择不打扰张总的新生活。\n年糕和小宝似乎也理解了，它们会得到更好的照顾。\n你衷心祝福张总找到了自己的梦想...\n\n【剧情完成】",
            background: "https://pic1.imgdb.cn/item/693a7f6c0edaae20ec56f9fc.jpg",
            characters: [],
            choices: [
                { text: "返回剧情选择", nextChapter: "return_to_selection" }
            ]
        }
    }
};

// 剧情管理器 - 修复后的版本
const StoryManager = {
    currentStory: null,
    currentChapterIndex: 0,
    playerChoices: [],
    
    // 开始剧情
    startStory(storyId) {
        this.currentStory = storyData[storyId];
        this.currentChapterIndex = 0;
        this.playerChoices = [];
        this.showChapter(this.currentStory.chapters[0]);
    },
    
    // 显示章节
    showChapter(chapter) {
        if (!chapter) {
            console.error('章节不存在');
            return;
        }
        
        // 如果是战斗章节
        if (chapter.type === "battle") {
            this.startStoryBattle(chapter);
            return;
        }
        
        // 如果是特殊章节ID（如 return_to_selection）
        if (chapter === "return_to_selection") {
            this.returnToSelection();
            return;
        }
        
        // 查找章节索引并更新
        const chapterIndex = this.findChapterIndex(chapter.id);
        if (chapterIndex !== -1) {
            this.currentChapterIndex = chapterIndex;
        }
        
        // 更新UI
        updateStoryUI(chapter);
    },
    
    // 查找章节索引
    findChapterIndex(chapterId) {
        if (!this.currentStory || !this.currentStory.chapters) return -1;
        return this.currentStory.chapters.findIndex(chap => chap.id === chapterId);
    },
    
    // 处理玩家选择
    handleChoice(choice) {
        console.log('玩家选择了:', choice.text, '下一章:', choice.nextChapter);
        this.playerChoices.push(choice);
        
        // 查找下一章
        let nextChapter = null;
        
        // 1. 先在 chapters 数组中查找
        if (this.currentStory.chapters) {
            nextChapter = this.currentStory.chapters.find(
                chap => chap.id === choice.nextChapter
            );
        }
        
        // 2. 如果在 chapters 中没找到，在 story 对象的其他属性中查找
        if (!nextChapter && this.currentStory[choice.nextChapter]) {
            nextChapter = this.currentStory[choice.nextChapter];
        }
        
        if (nextChapter) {
            this.showChapter(nextChapter);
        } else {
            console.error('找不到下一章:', choice.nextChapter);
            this.endStory();
        }
    },
    
    // 开始剧情中的战斗
    startStoryBattle(battleChapter) {
        console.log('开始剧情对战，敌人:', battleChapter.enemy);
        switchToBattleMode(battleChapter);
    },
    
    // 返回到选择界面
    returnToSelection() {
        document.getElementById('storyUI').style.display = 'none';
        document.getElementById('storySelection').style.display = 'block';
        console.log("返回剧情选择界面");
    },
    
    // 结束剧情
    endStory() {
        console.log("剧情结束，玩家选择记录：", this.playerChoices);
        this.returnToSelection();
    }
};

// 更新剧情UI的函数
function updateStoryUI(chapter) {
    console.log('更新UI，章节:', chapter.title);
    
    const storyUI = document.getElementById('storyUI');
    if (!storyUI) {
        console.error('找不到 storyUI 元素');
        return;
    }
    
    // 更新背景 - 添加渐变覆盖，提高文字可读性
    storyUI.style.backgroundImage = `
        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
        url(${chapter.background})
    `;
    storyUI.style.backgroundSize = 'cover';
    storyUI.style.backgroundPosition = 'center';
    storyUI.style.backgroundRepeat = 'no-repeat';
    
    // 更新标题
    document.getElementById('storyTitle').textContent = chapter.title;
    
    // 更新内容 - 添加逐字显示效果
    const contentElement = document.getElementById('storyContent');
    if (!contentElement) {
        console.error('找不到 storyContent 元素');
        return;
    }
    
    contentElement.textContent = ''; // 清空内容
    contentElement.className = 'story-content typing';
    
    const fullText = chapter.content || '';
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < fullText.length) {
            if (fullText.charAt(charIndex) === '\n') {
                contentElement.innerHTML += '<br>';
            } else {
                contentElement.innerHTML += fullText.charAt(charIndex);
            }
            charIndex++;
            setTimeout(typeWriter, 30); // 控制打字速度
        } else {
            contentElement.classList.remove('typing');
        }
    }
    
    // 立即开始打字效果
    typeWriter();
    
    // 更新角色
    const charactersContainer = document.getElementById('storyCharacters');
    if (charactersContainer) {
        charactersContainer.innerHTML = '';
        
        if (chapter.characters && chapter.characters.length > 0) {
            chapter.characters.forEach(char => {
                const charElement = document.createElement('div');
                charElement.className = `story-character ${char.position || 'center'}`;
                charElement.innerHTML = `
                    <img src="${char.img}" alt="${char.name}" 
                         style="animation-delay: ${Math.random() * 0.5}s">
                    <div class="character-name">${char.name}</div>
                    <div class="character-expression">${char.expression}</div>
                `;
                charactersContainer.appendChild(charElement);
                
                // 添加淡入动画
                setTimeout(() => {
                    charElement.classList.add('active');
                }, 500);
            });
        }
    }
    
    // 更新选项 - 添加淡入动画
    const choicesContainer = document.getElementById('storyChoices');
    if (choicesContainer) {
        choicesContainer.innerHTML = '';
        
        if (chapter.choices && chapter.choices.length > 0) {
            chapter.choices.forEach((choice, index) => {
                setTimeout(() => {
                    const choiceButton = document.createElement('button');
                    choiceButton.className = 'story-choice-btn';
                    choiceButton.textContent = choice.text;
                    choiceButton.onclick = () => {
                        console.log('点击了选项:', choice.text);
                        // 添加点击反馈
                        choiceButton.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            choiceButton.style.transform = '';
                            StoryManager.handleChoice(choice);
                        }, 150);
                    };
                    choiceButton.style.opacity = '0';
                    choiceButton.style.transform = 'translateY(20px)';
                    choicesContainer.appendChild(choiceButton);
                    
                    // 添加淡入动画
                    setTimeout(() => {
                        choiceButton.style.opacity = '1';
                        choiceButton.style.transform = 'translateY(0)';
                        choiceButton.style.transition = 'all 0.5s ease';
                    }, 100);
                }, index * 200 + 1000); // 延迟显示选项
            });
        }
    }
    
    // 更新进度显示
    updateProgressDisplay();
}

// 更新进度显示
function updateProgressDisplay() {
    const progressElement = document.getElementById('storyProgress');
    if (progressElement && StoryManager.currentStory && StoryManager.currentStory.chapters) {
        const totalChapters = StoryManager.currentStory.chapters.length;
        const currentIndex = StoryManager.currentChapterIndex + 1;
        progressElement.textContent = `${currentIndex}/${totalChapters}`;
    }
}

// 切换到对战模式（剧情触发）
function switchToBattleMode(battleChapter) {
    console.log('切换到对战模式');
    
    // 隐藏剧情容器
    const storyContainer = document.getElementById('storyContainer');
    if (storyContainer) {
        storyContainer.style.display = 'none';
    }
    
    // 设置对战参数
    gameData.playerPetKey = 'niangao'; // 默认使用年糕
    gameData.enemyPetKey = battleChapter.enemy;
    
    // 开始对战
    startBattle();
    
    // 监听战斗结束
    const originalEndBattle = window.endBattle;
    window.endBattle = function(isPlayerWin) {
        console.log('剧情对战结束，玩家胜利:', isPlayerWin);
        
        // 执行原始的结束战斗逻辑
        if (originalEndBattle) {
            originalEndBattle.call(this, isPlayerWin);
        }
        
        // 根据胜负跳转不同章节
        const nextChapterId = isPlayerWin ? 
            battleChapter.winChapter : 
            battleChapter.loseChapter;
        
        let nextChapter = null;
        
        // 查找下一章
        if (StoryManager.currentStory.chapters) {
            nextChapter = StoryManager.currentStory.chapters.find(
                chap => chap.id === nextChapterId
            );
        }
        
        if (!nextChapter && StoryManager.currentStory[nextChapterId]) {
            nextChapter = StoryManager.currentStory[nextChapterId];
        }
        
        if (nextChapter) {
            // 延时后返回剧情
            setTimeout(() => {
                const battleContainer = document.getElementById('battleContainer');
                if (battleContainer) {
                    battleContainer.style.display = 'none';
                }
                
                const storyContainer = document.getElementById('storyContainer');
                if (storyContainer) {
                    storyContainer.style.display = 'flex';
                    storyContainer.style.position = 'absolute';
                    storyContainer.style.top = '50%';
                    storyContainer.style.left = '50%';
                    storyContainer.style.transform = 'translate(-50%, -50%)';
                }
                
                StoryManager.showChapter(nextChapter);
            }, 3000);
        } else {
            console.error('找不到对战后的章节:', nextChapterId);
            setTimeout(() => {
                StoryManager.returnToSelection();
            }, 3000);
        }
    };
}

// 确保函数在全局可用
window.startStory = function(storyId) {
    StoryManager.startStory(storyId);
};