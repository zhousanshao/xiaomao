// 所有宠物数据
const allPets = {
    niangao: {
        name: "年糕",
        level: 20,
        maxHp: 120,
        img: "https://s41.ax1x.com/2025/12/09/pZuKotA.png",
        description: "张总的神秘宠物，总是喜欢挑衅主人。",
        skills: [
            { id: "skill1", name: "利爪突袭", icon: "💥", type: "attack", damage: 18, pp: 12 },
            { id: "skill2", name: "魔法飞弹", icon: "✨", type: "magic", damage: 28, pp: 8 },
            { id: "skill3", name: "治愈舔毛", icon: "❤️", type: "heal", damage: -15, pp: 5 },
            { id: "skill4", name: "催眠爪", icon: "😴", type: "control", damage: 10, pp: 4 }
        ]
    },
    xiaobao: {
        name: "小宝",
        level: 20,
        maxHp: 120,
        img: "https://s41.ax1x.com/2025/12/09/pZuKv7Q.png",
        description: "断尾流浪小猫，智商在线 + 身手敏捷，抗拒贴贴却对鸡胸肉毫无抵抗力！",
        skills: [
            { id: "skill1", name: "利爪突袭", icon: "💥", type: "attack", damage: 18, pp: 12 },
            { id: "skill2", name: "魔法飞弹", icon: "✨", type: "magic", damage: 28, pp: 8 },
            { id: "skill3", name: "治愈舔毛", icon: "❤️", type: "heal", damage: -15, pp: 5 },
            { id: "skill4", name: "催眠爪", icon: "😴", type: "control", damage: 10, pp: 4 }
        ]
    },
    zhangrusong: {
        name: "张儒松",
        level: 100,
        maxHp: 99,
        img: "https://s41.ax1x.com/2025/12/09/pZulj0O.jpg",
        description: "两只小猫最严厉的母亲---其实是人形铲屎官啦！",
        skills: [
            { id: "skill1", name: "无情铁手", icon: "✋", type: "attack", damage: 25, pp: 5 },
            { id: "skill2", name: "学猫叫", icon: "🐱", type: "control", damage: 10, pp: 5 },
            { id: "skill3", name: "铲屎", icon: "🚮", type: "self-damage", damage: 30, pp: 5 },
            { id: "skill4", name: "天道！", icon: "⚡", type: "ultimate", damage: "enemyHP", pp: 1 }
        ]
    },
    // 新增：狗策划周少
    zhoushao: {
        name: "狗策划周少",
        level: 100,
        maxHp: 99,
        img: "https://s41.ax1x.com/2025/12/10/pZu4S9e.png",
        description: "游戏的策划者，坚信世界都是Bug，自己才是管理者。",
        skills: [
            { id: "skill1", name: "画饼充饥", icon: "🥧", type: "heal", damage: -20, pp: 3 },
            { id: "skill2", name: "拒绝加班", icon: "🚫", type: "buff", damage: 0, pp: 3 },
            { id: "skill3", name: "篡改数据", icon: "🔄", type: "swap", damage: 0, pp: 3 },
            { id: "skill4", name: "提桶跑路", icon: "🏃", type: "self-destroy", damage: 99, pp: 1 }
        ]
    }
};

// 游戏核心数据
const gameData = {
    playerPetKey: null,
    enemyPetKey: null,
    // 玩家宠物数据
    player: {
        hp: 0,
        maxHp: 0,
        level: 0,
        isStunned: false, // 是否被控制（催眠/恐惧）
        immune: 0 // 新增：免疫异常状态回合数
    },
    // 敌方宠物数据
    enemy: {
        hp: 0,
        maxHp: 0,
        level: 0,
        isStunned: false,
        immune: 0 // 新增：免疫异常状态回合数
    },
    // 技能的PP数据
    skills: {},
    isBattleEnd: false,
    currentRound: 1,
    isEnemyTurn: false // 标记是否为敌方回合，防止玩家中途操作
};

// DOM元素获取
const petSelectContainer = document.getElementById('petSelectContainer');
const battleContainer = document.getElementById('battleContainer');
const petOptions = document.querySelectorAll('.pet-option');
const startBattleBtn = document.getElementById('startBattleBtn');
const playerHpFill = document.getElementById('playerHpFill');
const playerHpText = document.getElementById('playerHpText');
const enemyHpFill = document.getElementById('enemyHpFill');
const enemyHpText = document.getElementById('enemyHpText');
const battleLog = document.getElementById('battleLog');
const roundTip = document.getElementById('roundTip');
const resultModal = document.getElementById('resultModal');
const resultText = document.getElementById('resultText');
const restartBtn = document.getElementById('restartBtn');
const skillPool = document.getElementById('skillPool');
const playerPetImg = document.getElementById('playerPetImg');
const playerPetName = document.getElementById('playerPetName');
const playerPetLevel = document.getElementById('playerPetLevel');
const enemyPetImg = document.getElementById('enemyPetImg');
const enemyPetName = document.getElementById('enemyPetName');
const enemyPetLevel = document.getElementById('enemyPetLevel');
const skillEffectContainer = document.getElementById('skillEffectContainer');
// 获取BGM元素
const bgm = document.getElementById('bgm');

// BGM控制函数
function playBGM() {
    // 调整音量（0-1，建议0.5~0.7）
    bgm.volume = 0.6;
    // 播放BGM（处理浏览器自动播放限制）
    bgm.play().catch(error => {
        console.log("BGM自动播放失败，需用户交互触发：", error);
        // 备选方案：监听用户首次点击后播放
        document.addEventListener('click', () => {
            bgm.play();
        }, { once: true });
    });
}

// 暂停BGM
function pauseBGM() {
    bgm.pause();
}

// 恢复BGM
function resumeBGM() {
    bgm.play();
}

// 初始化游戏
function initGame() {
    // 显示宠物选择界面
    petSelectContainer.style.display = 'flex';
    
    // 宠物选择逻辑
    let selectedPet = null;

    // 宠物选项点击事件
    petOptions.forEach(option => {
        option.addEventListener('click', () => {
            // 移除其他选项的选中状态
            petOptions.forEach(opt => opt.classList.remove('selected'));
            // 添加当前选项的选中状态
            option.classList.add('selected');
            // 记录选中的宠物
            selectedPet = option.dataset.pet;
        });
    });

    // 开始战斗按钮点击事件
    startBattleBtn.addEventListener('click', () => {
        if (!selectedPet) {
            alert('请先选择一只宠物！');
            return;
        }

        startBattle(selectedPet);
    });

    // 重新开始按钮事件
    restartBtn.addEventListener('click', restartGame);
}

// 开始战斗
function startBattle(playerPetKey) {
    // 隐藏选择界面，显示战斗界面
    petSelectContainer.style.display = 'none';
    battleContainer.style.display = 'block';

    // 确定玩家和敌方宠物
    gameData.playerPetKey = playerPetKey;
    
    // 选择敌方宠物（不是玩家选择的那只）
    const availableEnemies = Object.keys(allPets).filter(key => key !== playerPetKey);
    gameData.enemyPetKey = availableEnemies[Math.floor(Math.random() * availableEnemies.length)];

    // 初始化玩家宠物数据
    const playerPet = allPets[gameData.playerPetKey];
    gameData.player.hp = playerPet.maxHp;
    gameData.player.maxHp = playerPet.maxHp;
    gameData.player.level = playerPet.level;
    gameData.player.isStunned = false;
    gameData.player.immune = 0; // 重置免疫状态

    // 初始化敌方宠物数据
    const enemyPet = allPets[gameData.enemyPetKey];
    gameData.enemy.hp = enemyPet.maxHp;
    gameData.enemy.maxHp = enemyPet.maxHp;
    gameData.enemy.level = enemyPet.level;
    gameData.enemy.isStunned = false;
    gameData.enemy.immune = 0; // 重置免疫状态

    // 初始化技能数据
    gameData.skills = {};
    playerPet.skills.forEach(skill => {
        gameData.skills[skill.id] = { ...skill };
    });

    // 更新UI
    updatePetUI('player', playerPet);
    updatePetUI('enemy', enemyPet);
    updateHpUI();
    createSkillButtons(playerPet.skills);

    // 播放背景BGM
    playBGM();

    // 初始化战斗日志
    battleLog.innerHTML = `[系统] 战斗开始！玩家选择了${playerPet.name}，敌方是${enemyPet.name}！`;

    // 开始第一回合
    startPlayerTurn();
}

// 更新宠物UI
function updatePetUI(side, pet) {
    const petImg = side === 'player' ? playerPetImg : enemyPetImg;
    const petName = side === 'player' ? playerPetName : enemyPetName;
    const petLevel = side === 'player' ? playerPetLevel : enemyPetLevel;

    petImg.src = pet.img;
    petName.textContent = pet.name;
    petLevel.textContent = `等级：${pet.level}`;
}

// 更新HP UI
function updateHpUI() {
    // 玩家HP
    const playerHpPercent = (gameData.player.hp / gameData.player.maxHp) * 100;
    playerHpFill.style.width = `${playerHpPercent}%`;
    playerHpText.textContent = `${gameData.player.hp}/${gameData.player.maxHp}`;

    // 敌方HP
    const enemyHpPercent = (gameData.enemy.hp / gameData.enemy.maxHp) * 100;
    enemyHpFill.style.width = `${enemyHpPercent}%`;
    enemyHpText.textContent = `${gameData.enemy.hp}/${gameData.enemy.maxHp}`;
}

// 创建技能按钮
function createSkillButtons(skills) {
    skillPool.innerHTML = ''; // 清空现有技能按钮

    skills.forEach(skill => {
        const button = document.createElement('button');
        button.className = `skill-btn`;
        button.dataset.skillId = skill.id;
        button.dataset.type = skill.type;
        button.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-details">
                <span class="skill-power">⚔️ ${skill.damage > 0 ? skill.damage : skill.damage < 0 ? '+' + Math.abs(skill.damage) : '-'}</span>
                <span class="skill-pp">🔋 ${skill.pp}</span>
            </div>
        `;

        // 添加点击事件
        button.addEventListener('click', () => useSkill(skill.id));
        
        skillPool.appendChild(button);
    });
}

// 使用技能
function useSkill(skillId) {
    // 如果是敌方回合或战斗已结束，不执行操作
    if (gameData.isEnemyTurn || gameData.isBattleEnd) return;
    
    // 如果玩家被控制且未免疫，不能使用技能
    if (gameData.player.isStunned && gameData.player.immune <= 0) {
        addBattleLog(`${playerPetName.textContent}被控制了，无法行动！`);
        setTimeout(endPlayerTurn, 1500);
        return;
    }

    const skill = gameData.skills[skillId];
    
    // 检查PP是否足够
    if (skill.pp <= 0) return;
    
    // 减少PP
    skill.pp--;
    updateSkillButton(skillId, skill.pp);
    
    // 获取技能按钮元素
    const skillButton = document.querySelector(`.skill-btn[data-skill-id="${skillId}"]`);
    if (skill.pp <= 0) {
        skillButton.disabled = true;
    }

    // 执行技能效果
    executeSkill(skill);
}

// 更新技能按钮PP显示
function updateSkillButton(skillId, pp) {
    const button = document.querySelector(`.skill-btn[data-skill-id="${skillId}"] .skill-pp`);
    if (button) {
        button.textContent = `🔋 ${pp}`;
    }
}

// 执行技能效果（玩家）
function executeSkill(skill) {
    const playerPet = allPets[gameData.playerPetKey];
    const enemyPet = allPets[gameData.enemyPetKey];
    
    // 添加战斗日志
    addBattleLog(`${playerPet.name}使用了${skill.name}！`);
    
    // 显示技能特效
    showSkillEffect(skill.type, 'enemy');
    
    // 根据技能类型执行不同效果
    switch (skill.type) {
        case 'attack':
        case 'magic':
        case 'ultimate':
            // 计算伤害
            let damage = skill.damage === 'enemyHP' ? gameData.enemy.hp : skill.damage;
            
            // 应用伤害
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - damage);
            enemyPetImg.classList.add('attack-effect');
            
            // 添加战斗日志
            addBattleLog(`${enemyPet.name}受到了${damage}点伤害！`);
            
            // 移除动画类
            setTimeout(() => {
                enemyPetImg.classList.remove('attack-effect');
            }, 500);
            
            break;
            
        case 'heal':
            // 治疗效果（damage为负值）
            const healAmount = Math.abs(skill.damage);
            gameData.player.hp = Math.min(gameData.player.maxHp, gameData.player.hp + healAmount);
            playerPetImg.classList.add('heal-effect');
            
            // 添加战斗日志
            addBattleLog(`${playerPet.name}恢复了${healAmount}点HP！`);
            
            // 移除动画类
            setTimeout(() => {
                playerPetImg.classList.remove('heal-effect');
            }, 800);
            
            break;
            
        case 'control':
            // 如果敌方免疫，则控制无效
            if (gameData.enemy.immune > 0) {
                addBattleLog(`${enemyPet.name}免疫了控制效果！`);
                break;
            }
            
            // 控制效果 - 50%概率触发
            const controlChance = 50; // 50%概率
            const isControlSuccess = Math.random() * 100 < controlChance;
            
            // 造成基础伤害
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - skill.damage);
            enemyPetImg.classList.add('attack-effect');
            
            if (isControlSuccess) {
                // 控制成功，下一回合敌方无法行动
                gameData.enemy.isStunned = true;
                enemyPetImg.classList.add('control-effect');
                addBattleLog(`${enemyPet.name}被控制了！下一回合无法行动！`);
            } else {
                addBattleLog(`${enemyPet.name}抵抗了控制效果！`);
            }
            
            // 移除动画类
            setTimeout(() => {
                enemyPetImg.classList.remove('attack-effect', 'control-effect');
            }, 1000);
            
            break;
            
        case 'self-damage':
            // 自残效果
            gameData.player.hp = Math.max(0, gameData.player.hp - skill.damage);
            playerPetImg.classList.add('attack-effect');
            
            // 添加战斗日志
            addBattleLog(`${playerPet.name}受到了${skill.damage}点伤害！`);
            
            // 移除动画类
            setTimeout(() => {
                playerPetImg.classList.remove('attack-effect');
            }, 500);
            
            break;

        // 新增：buff类型（拒绝加班）
        case 'buff':
            addBattleLog(`${playerPet.name}获得了免疫异常状态效果，持续3回合！`);
            gameData.player.immune = 3; // 免疫3回合
            playerPetImg.classList.add('heal-effect');
            setTimeout(() => {
                playerPetImg.classList.remove('heal-effect');
            }, 800);
            break;

        // 新增：swap类型（篡改数据）
        case 'swap':
            addBattleLog(`${playerPet.name}篡改了数据！与${enemyPet.name}交换HP！`);
            const tempHp = gameData.player.hp;
            gameData.player.hp = gameData.enemy.hp;
            gameData.enemy.hp = tempHp;
            // 确保HP在合理范围
            gameData.player.hp = Math.max(0, Math.min(gameData.player.hp, gameData.player.maxHp));
            gameData.enemy.hp = Math.max(0, Math.min(gameData.enemy.hp, gameData.enemy.maxHp));
            updateHpUI();
            playerPetImg.classList.add('attack-effect');
            enemyPetImg.classList.add('attack-effect');
            setTimeout(() => {
                playerPetImg.classList.remove('attack-effect');
                enemyPetImg.classList.remove('attack-effect');
            }, 800);
            break;

        // 新增：self-destroy类型（提桶跑路）
        case 'self-destroy':
            addBattleLog(`${playerPet.name}选择提桶跑路！自身HP归0！`);
            gameData.player.hp = 0; // 自身HP归0
            playerPetImg.classList.add('attack-effect');
            updateHpUI();
            setTimeout(() => {
                playerPetImg.classList.remove('attack-effect');
            }, 500);
            break;
    }
    
    // 更新HP显示
    updateHpUI();
    
    // 检查战斗是否结束
    if (checkBattleEnd()) {
        return;
    }
    
    // 结束玩家回合，开始敌方回合
    setTimeout(endPlayerTurn, 1500);
}

// 显示技能特效
function showSkillEffect(type, target) {
    const effect = document.createElement('div');
    effect.className = `skill-effect ${type}-effect-special`;
    
    // 根据目标设置位置
    if (target === 'enemy') {
        effect.style.left = '70%';
        effect.style.top = '30%';
    } else {
        effect.style.left = '30%';
        effect.style.top = '60%';
    }
    
    skillEffectContainer.appendChild(effect);
    
    // 动画结束后移除特效元素
    setTimeout(() => {
        effect.remove();
    }, 1500);
}

// 添加战斗日志
function addBattleLog(text) {
    const logEntry = document.createElement('div');
    logEntry.textContent = text;
    battleLog.appendChild(logEntry);
    battleLog.scrollTop = battleLog.scrollHeight; // 滚动到底部
}

// 检查战斗是否结束
function checkBattleEnd() {
    if (gameData.enemy.hp <= 0) {
        // 玩家胜利
        endBattle(true);
        return true;
    } else if (gameData.player.hp <= 0) {
        // 玩家失败
        endBattle(false);
        return true;
    }
    return false;
}

// 结束战斗
function endBattle(isPlayerWin) {
    gameData.isBattleEnd = true;
    roundTip.style.display = 'none';
    
    // 暂停BGM
    pauseBGM();
    
    // 显示结果弹窗
    resultModal.style.display = 'flex';
    resultText.textContent = isPlayerWin ? '战斗胜利！' : '战斗失败！';
    
    // 添加战斗日志
    addBattleLog(isPlayerWin ? `[系统] ${playerPetName.textContent}获胜！` : `[系统] ${enemyPetName.textContent}获胜！`);
}

// 开始玩家回合
function startPlayerTurn() {
    gameData.isEnemyTurn = false;
    roundTip.textContent = `第${gameData.currentRound}回合 - 你的回合！选择技能出击～`;
    roundTip.style.display = 'block';
    
    // 显示免疫状态提示
    if (gameData.player.immune > 0) {
        addBattleLog(`${playerPetName.textContent}还有${gameData.player.immune}回合免疫异常状态！`);
    }
}

// 结束玩家回合
function endPlayerTurn() {
    roundTip.style.display = 'none';
    setTimeout(startEnemyTurn, 1000);
}

// 开始敌方回合
function startEnemyTurn() {
    gameData.isEnemyTurn = true;
    roundTip.textContent = `第${gameData.currentRound}回合 - 敌方回合！`;
    roundTip.style.display = 'block';
    
    // 显示敌方免疫状态提示
    if (gameData.enemy.immune > 0) {
        addBattleLog(`${enemyPetName.textContent}还有${gameData.enemy.immune}回合免疫异常状态！`);
    }
    
    // 获取敌方宠物技能
    const enemyPet = allPets[gameData.enemyPetKey];
    
    // 如果敌方被控制且未免疫，无法行动
    if (gameData.enemy.isStunned && gameData.enemy.immune <= 0) {
        addBattleLog(`${enemyPet.name}被控制了，无法行动！`);
        gameData.enemy.isStunned = false; // 控制效果只持续一回合
        setTimeout(endEnemyTurn, 1500);
        return;
    }
    
    // 选择一个可用技能（PP>0）
    const availableSkills = enemyPet.skills.filter(skill => {
        // 对于特殊技能，确保PP>0
        if (skill.name === '天道！') {
            const skillData = gameData.skills[skill.id] || { pp: skill.pp };
            return skillData.pp > 0;
        }
        return skill.pp > 0;
    });
    
    // 如果没有可用技能，使用第一个技能
    const selectedSkill = availableSkills.length > 0 
        ? availableSkills[Math.floor(Math.random() * availableSkills.length)] 
        : enemyPet.skills[0];
    
    // 延迟执行敌方技能，模拟思考过程
    setTimeout(() => {
        executeEnemySkill(selectedSkill);
    }, 1500);
}

// 执行敌方技能
function executeEnemySkill(skill) {
    const playerPet = allPets[gameData.playerPetKey];
    const enemyPet = allPets[gameData.enemyPetKey];
    
    // 添加战斗日志
    addBattleLog(`${enemyPet.name}使用了${skill.name}！`);
    
    // 显示技能特效
    showSkillEffect(skill.type, 'player');
    
    // 根据技能类型执行不同效果
    switch (skill.type) {
        case 'attack':
        case 'magic':
        case 'ultimate':
            // 计算伤害
            let damage = skill.damage === 'enemyHP' ? gameData.player.hp : skill.damage;
            
            // 应用伤害
            gameData.player.hp = Math.max(0, gameData.player.hp - damage);
            playerPetImg.classList.add('attack-effect');
            
            // 添加战斗日志
            addBattleLog(`${playerPet.name}受到了${damage}点伤害！`);
            
            // 移除动画类
            setTimeout(() => {
                playerPetImg.classList.remove('attack-effect');
            }, 500);
            
            break;
            
        case 'heal':
            // 治疗效果（damage为负值）
            const healAmount = Math.abs(skill.damage);
            gameData.enemy.hp = Math.min(gameData.enemy.maxHp, gameData.enemy.hp + healAmount);
            enemyPetImg.classList.add('heal-effect');
            
            // 添加战斗日志
            addBattleLog(`${enemyPet.name}恢复了${healAmount}点HP！`);
            
            // 移除动画类
            setTimeout(() => {
                enemyPetImg.classList.remove('heal-effect');
            }, 800);
            
            break;
            
        case 'control':
            // 如果玩家免疫，则控制无效
            if (gameData.player.immune > 0) {
                addBattleLog(`${playerPet.name}免疫了控制效果！`);
                break;
            }
            
            // 控制效果 - 50%概率触发
            const controlChance = 50; // 50%概率
            const isControlSuccess = Math.random() * 100 < controlChance;
            
            // 造成基础伤害
            gameData.player.hp = Math.max(0, gameData.player.hp - skill.damage);
            playerPetImg.classList.add('attack-effect');
            
            if (isControlSuccess) {
                // 控制成功，下一回合玩家无法行动
                gameData.player.isStunned = true;
                playerPetImg.classList.add('control-effect');
                addBattleLog(`${playerPet.name}被控制了！下一回合无法行动！`);
            } else {
                addBattleLog(`${playerPet.name}抵抗了控制效果！`);
            }
            
            // 移除动画类
            setTimeout(() => {
                playerPetImg.classList.remove('attack-effect', 'control-effect');
            }, 1000);
            
            break;
            
        case 'self-damage':
            // 自残效果
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - skill.damage);
            enemyPetImg.classList.add('attack-effect');
            
            // 添加战斗日志
            addBattleLog(`${enemyPet.name}受到了${skill.damage}点伤害！`);
            
            // 移除动画类
            setTimeout(() => {
                enemyPetImg.classList.remove('attack-effect');
            }, 500);
            
            break;

        // 新增：buff类型（拒绝加班）
        case 'buff':
            addBattleLog(`${enemyPet.name}获得了免疫异常状态效果，持续3回合！`);
            gameData.enemy.immune = 3; // 免疫3回合
            enemyPetImg.classList.add('heal-effect');
            setTimeout(() => {
                enemyPetImg.classList.remove('heal-effect');
            }, 800);
            break;

        // 新增：swap类型（篡改数据）
        case 'swap':
            addBattleLog(`${enemyPet.name}篡改了数据！与${playerPet.name}交换HP！`);
            const tempHp = gameData.enemy.hp;
            gameData.enemy.hp = gameData.player.hp;
            gameData.player.hp = tempHp;
            // 确保HP在合理范围
            gameData.player.hp = Math.max(0, Math.min(gameData.player.hp, gameData.player.maxHp));
            gameData.enemy.hp = Math.max(0, Math.min(gameData.enemy.hp, gameData.enemy.maxHp));
            updateHpUI();
            playerPetImg.classList.add('attack-effect');
            enemyPetImg.classList.add('attack-effect');
            setTimeout(() => {
                playerPetImg.classList.remove('attack-effect');
                enemyPetImg.classList.remove('attack-effect');
            }, 800);
            break;

        // 新增：self-destroy类型（提桶跑路）
        case 'self-destroy':
            addBattleLog(`${enemyPet.name}选择提桶跑路！自身HP归0！`);
            gameData.enemy.hp = 0; // 自身HP归0
            enemyPetImg.classList.add('attack-effect');
            updateHpUI();
            setTimeout(() => {
                enemyPetImg.classList.remove('attack-effect');
            }, 500);
            break;
    }
    
    // 更新HP显示
    updateHpUI();
    
    // 检查战斗是否结束
    if (checkBattleEnd()) {
        return;
    }
    
    // 结束敌方回合
    setTimeout(endEnemyTurn, 1500);
}

// 结束敌方回合
function endEnemyTurn() {
    // 减少免疫回合数
    if (gameData.player.immune > 0) {
        gameData.player.immune--;
        if (gameData.player.immune === 0) {
            addBattleLog(`${playerPetName.textContent}的免疫效果消失了！`);
        }
    }
    if (gameData.enemy.immune > 0) {
        gameData.enemy.immune--;
        if (gameData.enemy.immune === 0) {
            addBattleLog(`${enemyPetName.textContent}的免疫效果消失了！`);
        }
    }

    // 回合结束，清除控制状态
    gameData.player.isStunned = false;
    gameData.enemy.isStunned = false;
    
    roundTip.style.display = 'none';
    gameData.currentRound++;
    setTimeout(startPlayerTurn, 1000);
}

// 重新开始游戏
function restartGame() {
    // 重置游戏数据
    gameData.isBattleEnd = false;
    gameData.currentRound = 1;
    gameData.isEnemyTurn = false;
    gameData.player.immune = 0;
    gameData.enemy.immune = 0;
    
    // 隐藏结果弹窗
    resultModal.style.display = 'none';
    
    // 恢复BGM播放
    resumeBGM();
    
    // 重新开始游戏
    initGame();
}

// 页面加载完成后初始化游戏
window.addEventListener('DOMContentLoaded', initGame);