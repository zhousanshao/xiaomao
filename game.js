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
    },
    qbi: {
        name: "Q比",
        level: 20,
        maxHp: 120,
        img: "https://s41.ax1x.com/2025/12/10/pZuHUgO.jpg",
        description: "汪星人Q比，年糕的一生之敌，相爱相杀的戏剧每天都在上演。",
        skills: [
            { id: "skill1", name: "撕咬", icon: "🐶", type: "random-attack", damage: 0, pp: 5 },
            { id: "skill2", name: "汪星咆哮", icon: "🐺", type: "fear-control", damage: 25, pp: 3 },
            { id: "skill3", name: "狗屎", icon: "💩", type: "shit-attack", damage: 20, pp: 3 },
            { id: "skill4", name: "拆家", icon: "🏠", type: "self-harm-attack", damage: 30, pp: 3 }
        ]
    },
    sunzichen: {
        name: "孙子晨",
        level: 99,
        maxHp: 80,
        img: "https://s41.ax1x.com/2025/12/11/pZKFOtf.png",
        dreamImg: "https://s41.ax1x.com/2025/12/11/pZKFXh8.png",
        description: "周少的好大儿，一直在健身的路上。走出半生，归来仍是的少年...的模样。",
        hasGymCard: false,
        dreamTurns: 0,
        skills: [
            { 
                id: "skill1", 
                name: "健身卡", 
                icon: "💳", 
                type: "damage-reduce", 
                damage: 0, 
                pp: 1,
                description: "孙子晨购买了健身卡，信心大增，后续收到的所有威力伤害-20%。"
            },
            { 
                id: "skill2", 
                name: "佯挥汗", 
                icon: "💦", 
                type: "attack", 
                damage: 30, 
                pp: 4,
                description: "孙子晨开始健身，挥汗如雨"
            },
            { 
                id: "skill3", 
                name: "暗贪香", 
                icon: "🍖", 
                type: "heal", 
                damage: -20, 
                pp: 4,
                description: "孙子晨又背着大家偷吃好东西了"
            },
            { 
                id: "skill4", 
                name: "黄粱一梦", 
                icon: "💤", 
                type: "dream", 
                damage: -80, 
                pp: 1,
                description: "孙子晨梦见自己变为了肌肉猛男，沉浸其中"
            }
        ]
    }
};

// 游戏核心数据
const gameData = {
    playerPetKey: null,
    enemyPetKey: null,
    player: {
        hp: 0,
        maxHp: 0,
        level: 0,
        isStunned: false,
        immune: 0
    },
    enemy: {
        hp: 0,
        maxHp: 0,
        level: 0,
        isStunned: false,
        immune: 0
    },
    skills: {},
    isBattleEnd: false,
    currentRound: 1,
    isEnemyTurn: false
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
const bgm = document.getElementById('bgm');

// 新增：冤家路窄彩蛋容器
const easterEggContainer = document.createElement('div');
easterEggContainer.id = 'easterEggContainer';
easterEggContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    pointer-events: none;
    background: transparent !important;
`;
battleContainer.appendChild(easterEggContainer);

// 等待DOM加载完成后执行初始化
// 替换原有的 DOMContentLoaded 事件处理
window.addEventListener('load', function() {
    // 重新获取元素
    const petOptions = document.querySelectorAll('.pet-option');
    const startBattleBtn = document.getElementById('startBattleBtn');

    // 强制启用按钮
    startBattleBtn.disabled = false;
    startBattleBtn.style.pointerEvents = 'auto';

    // 绑定事件
    petOptions.forEach(option => {
        option.addEventListener('click', petSelectHandler);
    });

    startBattleBtn.addEventListener('click', startBattleHandler);
});

// BGM控制函数
function playBGM() {
    bgm.volume = 0.6;
    bgm.play().catch(error => {
        console.log("BGM自动播放失败，需用户交互触发：", error);
        document.addEventListener('click', () => {
            bgm.play();
        }, { once: true });
    });
}

function pauseBGM() {
    bgm.pause();
}

function resumeBGM() {
    bgm.play();
}

// 宠物选择处理函数
function petSelectHandler() {
    // 移除其他选项的选中状态
    petOptions.forEach(opt => opt.classList.remove('selected'));
    // 添加当前选项的选中状态
    this.classList.add('selected');
    // 设置选中的宠物
    gameData.playerPetKey = this.dataset.pet;
    console.log('选择了宠物:', gameData.playerPetKey);
}

// 开始战斗处理函数
function startBattleHandler() {
    if (!gameData.playerPetKey) {
        alert('请先选择一只宠物！');
        return;
    }
    
    // 开始战斗
    startBattle();
}

// 主开始战斗函数
function startBattle() {
    // 隐藏选择界面，显示战斗界面
    petSelectContainer.style.display = 'none';
    battleContainer.style.display = 'block';
    
    // 确定玩家和敌方宠物
    const playerPet = allPets[gameData.playerPetKey];
    
    // 选择敌方宠物（不是玩家选择的那只）
    const availableEnemies = Object.keys(allPets).filter(key => key !== gameData.playerPetKey);
    gameData.enemyPetKey = availableEnemies[Math.floor(Math.random() * availableEnemies.length)];
    const enemyPet = allPets[gameData.enemyPetKey];
    
    // 初始化玩家宠物数据
    gameData.player.hp = playerPet.maxHp;
    gameData.player.maxHp = playerPet.maxHp;
    gameData.player.level = playerPet.level;
    gameData.player.isStunned = false;
    gameData.player.immune = 0;
    
    // 初始化敌方宠物数据
    gameData.enemy.hp = enemyPet.maxHp;
    gameData.enemy.maxHp = enemyPet.maxHp;
    gameData.enemy.level = enemyPet.level;
    gameData.enemy.isStunned = false;
    gameData.enemy.immune = 0;
    
    // 重置宠物特殊状态
    Object.values(allPets).forEach(pet => {
        pet.hasGymCard = false;
        pet.dreamTurns = 0;
    });
    
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
    
    // 彩蛋判断
    const isParentChildBattle = 
        (gameData.playerPetKey === 'sunzichen' && gameData.enemyPetKey === 'zhoushao') || 
        (gameData.playerPetKey === 'zhoushao' && gameData.enemyPetKey === 'sunzichen');
    
    const isEnemyBattle = 
        (gameData.playerPetKey === 'qbi' && gameData.enemyPetKey === 'niangao') || 
        (gameData.playerPetKey === 'niangao' && gameData.enemyPetKey === 'qbi');
    
    // 初始化战斗日志
    battleLog.innerHTML = `[系统] 战斗开始！玩家选择了${playerPet.name}，敌方是${enemyPet.name}！`;
    
    if (isParentChildBattle) {
        showParentChildEgg();
        battleLog.innerHTML += `<br><span style="color:#ff9900;font-size:18px;">【父子情深】</span>`;
    } else if (isEnemyBattle) {
        showEnemyEgg();
        battleLog.innerHTML += `<br><span style="color:red;font-size:18px;">【冤家路窄】</span>`;
    }
    
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
    skillPool.innerHTML = '';
    
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
        
        button.addEventListener('click', () => useSkill(skill.id));
        skillPool.appendChild(button);
    });
}

// 使用技能
function useSkill(skillId) {
    if (gameData.isEnemyTurn || gameData.isBattleEnd) return;
    
    const playerPet = allPets[gameData.playerPetKey];
    
    // 如果处于黄粱一梦状态，无法行动
    if (playerPet.dreamTurns > 0) {
        addBattleLog(`${playerPetName.textContent}还在梦境中，无法行动！`);
        setTimeout(endPlayerTurn, 1500);
        return;
    }
    
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
            let damage = skill.damage === 'enemyHP' ? gameData.enemy.hp : skill.damage;
            const actualDamage = calculateDamage(damage, playerPet, enemyPet);
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - actualDamage);
            enemyPetImg.classList.add('attack-effect');
            addBattleLog(`${enemyPet.name}受到了${actualDamage}点伤害！`);
            setTimeout(() => enemyPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'heal':
            const healAmount = Math.abs(skill.damage);
            gameData.player.hp = Math.min(gameData.player.maxHp, gameData.player.hp + healAmount);
            playerPetImg.classList.add('heal-effect');
            addBattleLog(`${playerPet.name}恢复了${healAmount}点HP！`);
            setTimeout(() => playerPetImg.classList.remove('heal-effect'), 800);
            break;
            
        case 'control':
            if (gameData.enemy.immune > 0) {
                addBattleLog(`${enemyPet.name}免疫了控制效果！`);
                break;
            }
            
            const controlChance = 50;
            const isControlSuccess = Math.random() * 100 < controlChance;
            const controlDamage = calculateDamage(skill.damage, playerPet, enemyPet);
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - controlDamage);
            enemyPetImg.classList.add('attack-effect');
            
            if (isControlSuccess) {
                gameData.enemy.isStunned = true;
                enemyPetImg.classList.add('control-effect');
                addBattleLog(`${enemyPet.name}被控制了！下一回合无法行动！`);
            } else {
                addBattleLog(`${enemyPet.name}抵抗了控制效果！`);
            }
            
            setTimeout(() => enemyPetImg.classList.remove('attack-effect', 'control-effect'), 1000);
            break;
            
        case 'self-damage':
            const selfDamage = calculateDamage(skill.damage, playerPet, playerPet);
            gameData.player.hp = Math.max(0, gameData.player.hp - selfDamage);
            playerPetImg.classList.add('attack-effect');
            addBattleLog(`${playerPet.name}受到了${selfDamage}点伤害！`);
            setTimeout(() => playerPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'buff':
            addBattleLog(`${playerPet.name}获得了免疫异常状态效果，持续3回合！`);
            gameData.player.immune = 3;
            playerPetImg.classList.add('heal-effect');
            setTimeout(() => playerPetImg.classList.remove('heal-effect'), 800);
            break;
            
        case 'swap':
            addBattleLog(`${playerPet.name}篡改了数据！与${enemyPet.name}交换HP！`);
            const tempHp = gameData.player.hp;
            gameData.player.hp = gameData.enemy.hp;
            gameData.enemy.hp = tempHp;
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
            
        case 'self-destroy':
            addBattleLog(`${playerPet.name}选择提桶跑路！自身HP归0！`);
            gameData.player.hp = 0;
            playerPetImg.classList.add('attack-effect');
            updateHpUI();
            setTimeout(() => playerPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'random-attack':
            const randomDamage = Math.floor(Math.random() * 21) + 10;
            const actualRandomDamage = calculateDamage(randomDamage, playerPet, enemyPet);
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - actualRandomDamage);
            enemyPetImg.classList.add('attack-effect');
            addBattleLog(`${playerPet.name}使出撕咬！造成了${actualRandomDamage}点随机伤害！`);
            setTimeout(() => enemyPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'fear-control':
            if (gameData.enemy.immune > 0) {
                addBattleLog(`${enemyPet.name}免疫了恐惧效果！`);
            } else {
                const fearChance = 50;
                const isFearSuccess = Math.random() * 100 < fearChance;
                const fearDamage = calculateDamage(skill.damage, playerPet, enemyPet);
                gameData.enemy.hp = Math.max(0, gameData.enemy.hp - fearDamage);
                enemyPetImg.classList.add('attack-effect');
                addBattleLog(`${playerPet.name}发出汪星咆哮！造成${fearDamage}点伤害！`);
                
                if (isFearSuccess) {
                    gameData.enemy.isStunned = true;
                    enemyPetImg.classList.add('control-effect');
                    addBattleLog(`${enemyPet.name}被恐惧了！下一回合无法行动！`);
                } else {
                    addBattleLog(`${enemyPet.name}抵抗了恐惧效果！`);
                }
                setTimeout(() => enemyPetImg.classList.remove('attack-effect', 'control-effect'), 1000);
            }
            break;
            
        case 'shit-attack':
            const shitDamage = calculateDamage(skill.damage, playerPet, enemyPet);
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - shitDamage);
            enemyPetImg.classList.add('attack-effect');
            showShitEffect();
            addBattleLog(`${playerPet.name}扔出一坨狗屎！${enemyPet.name}受到${shitDamage}点伤害！`);
            setTimeout(() => enemyPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'self-harm-attack':
            const selfHarmDamage = calculateDamage(20, playerPet, playerPet);
            gameData.player.hp = Math.max(0, gameData.player.hp - selfHarmDamage);
            const enemyHarmDamage = calculateDamage(skill.damage, playerPet, enemyPet);
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - enemyHarmDamage);
            playerPetImg.classList.add('attack-effect');
            enemyPetImg.classList.add('attack-effect');
            addBattleLog(`${playerPet.name}疯狂拆家！自身损失${selfHarmDamage}HP，对${enemyPet.name}造成${enemyHarmDamage}点伤害！`);
            updateHpUI();
            setTimeout(() => {
                playerPetImg.classList.remove('attack-effect');
                enemyPetImg.classList.remove('attack-effect');
            }, 800);
            break;
            
        case 'damage-reduce':
            addBattleLog(`${playerPet.name}购买了健身卡！后续受到的伤害减少20%！`);
            playerPet.hasGymCard = true;
            playerPetImg.classList.add('buff-effect');
            setTimeout(() => playerPetImg.classList.remove('buff-effect'), 800);
            break;
            
        case 'dream':
            const dreamHealAmount = Math.abs(skill.damage);
            gameData.player.hp = Math.min(gameData.player.maxHp, gameData.player.hp + dreamHealAmount);
            playerPetImg.src = playerPet.dreamImg;
            playerPetImg.classList.add('dream-effect');
            playerPet.dreamTurns = 2;
            addBattleLog(`${playerPet.name}使用了黄粱一梦！恢复${dreamHealAmount}点HP，但接下来2回合无法行动！`);
            setTimeout(() => playerPetImg.classList.remove('dream-effect'), 1000);
            break;
    }
    
    updateHpUI();
    
    if (checkBattleEnd()) return;
    
    setTimeout(endPlayerTurn, 1500);
}

// 显示大便特效
function showShitEffect() {
    const shitEffect = document.createElement('div');
    shitEffect.className = 'shit-effect';
    shitEffect.innerHTML = '💩';
    skillEffectContainer.appendChild(shitEffect);
    
    setTimeout(() => {
        shitEffect.style.left = '70%';
        shitEffect.style.top = '30%';
        shitEffect.style.transform = 'scale(3) rotate(720deg)';
    }, 100);
    
    setTimeout(() => shitEffect.remove(), 1500);
}

// 显示技能特效
function showSkillEffect(type, target) {
    const effect = document.createElement('div');
    effect.className = `skill-effect ${type}-effect-special`;
    
    if (target === 'enemy') {
        effect.style.left = '70%';
        effect.style.top = '30%';
    } else {
        effect.style.left = '30%';
        effect.style.top = '60%';
    }
    
    skillEffectContainer.appendChild(effect);
    setTimeout(() => effect.remove(), 1500);
}

// 新增：冤家路窄彩蛋显示函数
function showEnemyEgg() {
    easterEggContainer.innerHTML = '';
    const eggText = document.createElement('div');
    eggText.className = 'enemy-egg';
    eggText.textContent = '【冤家路窄】';
    
    eggText.style.cssText = `
        font-size: 72px !important;
        color: white !important;
        font-weight: bold !important;
        text-shadow: 
            3px 3px 0 #ff0000,
            -3px 3px 0 #ff0000,
            3px -3px 0 #ff0000,
            -3px -3px 0 #ff0000,
            0 0 20px #ff0000,
            0 0 30px #ff0000,
            0 0 40px #ff0000 !important;
        animation: eggPulse 1s ease-in-out infinite;
        background: rgba(0, 0, 0, 0.7) !important;
        padding: 30px 60px;
        border-radius: 20px;
        white-space: nowrap;
        z-index: 10000;
        border: 5px solid #ff0000;
        box-shadow: 0 0 50px rgba(255, 0, 0, 0.8);
        backdrop-filter: blur(5px);
    `;
    
    easterEggContainer.appendChild(eggText);
    easterEggContainer.style.display = 'flex';
    easterEggContainer.style.zIndex = '9999';
    
    setTimeout(() => {
        easterEggContainer.style.display = 'none';
        easterEggContainer.innerHTML = '';
    }, 3000);
}

// 新增：父子情深彩蛋显示函数
function showParentChildEgg() {
    easterEggContainer.innerHTML = '';
    const eggText = document.createElement('div');
    eggText.className = 'parent-child-egg';
    eggText.textContent = '【父子情深】';
    
    eggText.style.cssText = `
        font-size: 72px !important;
        color: white !important;
        font-weight: bold !important;
        text-shadow: 
            3px 3px 0 #ff9900,
            -3px 3px 0 #ff9900,
            3px -3px 0 #ff9900,
            -3px -3px 0 #ff9900,
            0 0 20px #ff9900,
            0 0 30px #ff9900,
            0 0 40px #ff9900 !important;
        animation: eggPulse 1s ease-in-out infinite;
        background: rgba(0, 0, 0, 0.7) !important;
        padding: 30px 60px;
        border-radius: 20px;
        white-space: nowrap;
        z-index: 10000;
        border: 5px solid #ff9900;
        box-shadow: 0 0 50px rgba(255, 153, 0, 0.8);
        backdrop-filter: blur(5px);
    `;
    
    easterEggContainer.appendChild(eggText);
    easterEggContainer.style.display = 'flex';
    easterEggContainer.style.zIndex = '9999';
    
    setTimeout(() => {
        easterEggContainer.style.display = 'none';
        easterEggContainer.innerHTML = '';
    }, 3000);
}

// 伤害计算函数
function calculateDamage(baseDamage, attacker, target) {
    let finalDamage = baseDamage;
    
    if (target && target.hasGymCard) {
        finalDamage = Math.floor(baseDamage * 0.8);
        if (finalDamage !== baseDamage) {
            addBattleLog(`由于健身卡效果，伤害从${baseDamage}减少到${finalDamage}！`);
        }
    }
    
    return finalDamage;
}

// 添加战斗日志
function addBattleLog(text) {
    const logEntry = document.createElement('div');
    logEntry.textContent = text;
    battleLog.appendChild(logEntry);
    battleLog.scrollTop = battleLog.scrollHeight;
}

// 检查战斗是否结束
function checkBattleEnd() {
    if (gameData.enemy.hp <= 0) {
        endBattle(true);
        return true;
    } else if (gameData.player.hp <= 0) {
        endBattle(false);
        return true;
    }
    return false;
}

// 结束战斗
function endBattle(isPlayerWin) {
    gameData.isBattleEnd = true;
    roundTip.style.display = 'none';
    pauseBGM();
    resultModal.style.display = 'flex';
    resultText.textContent = isPlayerWin ? '战斗胜利！' : '战斗失败！';
    addBattleLog(isPlayerWin ? `[系统] ${playerPetName.textContent}获胜！` : `[系统] ${enemyPetName.textContent}获胜！`);
}

// 开始玩家回合
function startPlayerTurn() {
    gameData.isEnemyTurn = false;
    
    const playerPet = allPets[gameData.playerPetKey];
    if (playerPet.dreamTurns > 0) {
        playerPet.dreamTurns--;
        addBattleLog(`${playerPet.name}还在梦境中，无法行动！（剩余${playerPet.dreamTurns}回合）`);
        
        if (playerPet.dreamTurns === 0) {
            playerPetImg.src = playerPet.img;
            addBattleLog(`${playerPet.name}从梦境中醒来！`);
        }
        
        setTimeout(endPlayerTurn, 1500);
        return;
    }
    
    if (gameData.player.isStunned && gameData.player.immune <= 0) {
        addBattleLog(`${playerPetName.textContent}被控制了，无法行动！`);
        setTimeout(endPlayerTurn, 1500);
        return;
    }
    
    roundTip.textContent = `第${gameData.currentRound}回合 - 你的回合！选择技能出击～`;
    roundTip.style.display = 'block';
    
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
    
    const enemyPet = allPets[gameData.enemyPetKey];
    if (enemyPet.dreamTurns > 0) {
        enemyPet.dreamTurns--;
        addBattleLog(`${enemyPet.name}还在梦境中，无法行动！（剩余${enemyPet.dreamTurns}回合）`);
        
        if (enemyPet.dreamTurns === 0) {
            enemyPetImg.src = enemyPet.img;
            addBattleLog(`${enemyPet.name}从梦境中醒来！`);
        }
        
        setTimeout(endEnemyTurn, 1500);
        return;
    }
    
    roundTip.textContent = `第${gameData.currentRound}回合 - 敌方回合！`;
    roundTip.style.display = 'block';
    
    if (gameData.enemy.immune > 0) {
        addBattleLog(`${enemyPetName.textContent}还有${gameData.enemy.immune}回合免疫异常状态！`);
    }
    
    if (gameData.enemy.isStunned && gameData.enemy.immune <= 0) {
        addBattleLog(`${enemyPet.name}被控制了，无法行动！`);
        gameData.enemy.isStunned = false;
        setTimeout(endEnemyTurn, 1500);
        return;
    }
    
    // 获取敌方宠物技能
    enemyPetImg.classList.add('attack-effect');
    const availableSkills = enemyPet.skills.filter(skill => skill.pp > 0);
    const selectedSkill = availableSkills.length > 0 
        ? availableSkills[Math.floor(Math.random() * availableSkills.length)] 
        : enemyPet.skills[0];
    
    setTimeout(() => executeEnemySkill(selectedSkill), 1500);
}

// 执行敌方技能
// 执行敌方技能 - 完整版本
function executeEnemySkill(skill) {
    const playerPet = allPets[gameData.playerPetKey];
    const enemyPet = allPets[gameData.enemyPetKey];
    
    addBattleLog(`${enemyPet.name}使用了${skill.name}！`);
    showSkillEffect(skill.type, 'player');
    
    // 根据技能类型执行不同效果
    switch (skill.type) {
        case 'attack':
        case 'magic':
            const damage = calculateDamage(skill.damage, enemyPet, playerPet);
            gameData.player.hp = Math.max(0, gameData.player.hp - damage);
            playerPetImg.classList.add('attack-effect');
            addBattleLog(`${playerPet.name}受到了${damage}点伤害！`);
            setTimeout(() => playerPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'heal':
            const healAmount = Math.abs(skill.damage);
            gameData.enemy.hp = Math.min(gameData.enemy.maxHp, gameData.enemy.hp + healAmount);
            enemyPetImg.classList.add('heal-effect');
            addBattleLog(`${enemyPet.name}恢复了${healAmount}点HP！`);
            setTimeout(() => enemyPetImg.classList.remove('heal-effect'), 800);
            break;
            
        case 'control':
            if (gameData.player.immune > 0) {
                addBattleLog(`${playerPet.name}免疫了控制效果！`);
                break;
            }
            
            const controlChance = 50;
            const isControlSuccess = Math.random() * 100 < controlChance;
            const controlDamage = calculateDamage(skill.damage, enemyPet, playerPet);
            gameData.player.hp = Math.max(0, gameData.player.hp - controlDamage);
            playerPetImg.classList.add('attack-effect');
            
            if (isControlSuccess) {
                gameData.player.isStunned = true;
                playerPetImg.classList.add('control-effect');
                addBattleLog(`${playerPet.name}被控制了！下一回合无法行动！`);
            } else {
                addBattleLog(`${playerPet.name}抵抗了控制效果！`);
            }
            
            setTimeout(() => playerPetImg.classList.remove('attack-effect', 'control-effect'), 1000);
            break;
            
        case 'self-damage':
            const selfDamage = calculateDamage(skill.damage, enemyPet, enemyPet);
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - selfDamage);
            enemyPetImg.classList.add('attack-effect');
            addBattleLog(`${enemyPet.name}受到了${selfDamage}点伤害！`);
            setTimeout(() => enemyPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'ultimate':
            let ultimateDamage = skill.damage === 'enemyHP' ? gameData.player.hp : skill.damage;
            const actualUltimateDamage = calculateDamage(ultimateDamage, enemyPet, playerPet);
            gameData.player.hp = Math.max(0, gameData.player.hp - actualUltimateDamage);
            playerPetImg.classList.add('attack-effect');
            addBattleLog(`${playerPet.name}受到了${actualUltimateDamage}点终极伤害！`);
            setTimeout(() => playerPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'buff':
            addBattleLog(`${enemyPet.name}获得了免疫异常状态效果，持续3回合！`);
            gameData.enemy.immune = 3;
            enemyPetImg.classList.add('heal-effect');
            setTimeout(() => enemyPetImg.classList.remove('heal-effect'), 800);
            break;
            
        case 'swap':
            addBattleLog(`${enemyPet.name}篡改了数据！与${playerPet.name}交换HP！`);
            const tempHp = gameData.player.hp;
            gameData.player.hp = gameData.enemy.hp;
            gameData.enemy.hp = tempHp;
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
            
        case 'self-destroy':
            addBattleLog(`${enemyPet.name}选择提桶跑路！自身HP归0！`);
            gameData.enemy.hp = 0;
            enemyPetImg.classList.add('attack-effect');
            updateHpUI();
            setTimeout(() => enemyPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'random-attack':
            const randomDamage = Math.floor(Math.random() * 21) + 10;
            const actualRandomDamage = calculateDamage(randomDamage, enemyPet, playerPet);
            gameData.player.hp = Math.max(0, gameData.player.hp - actualRandomDamage);
            playerPetImg.classList.add('attack-effect');
            addBattleLog(`${enemyPet.name}使出撕咬！造成了${actualRandomDamage}点随机伤害！`);
            setTimeout(() => playerPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'fear-control':
            if (gameData.player.immune > 0) {
                addBattleLog(`${playerPet.name}免疫了恐惧效果！`);
            } else {
                const fearChance = 50;
                const isFearSuccess = Math.random() * 100 < fearChance;
                const fearDamage = calculateDamage(skill.damage, enemyPet, playerPet);
                gameData.player.hp = Math.max(0, gameData.player.hp - fearDamage);
                playerPetImg.classList.add('attack-effect');
                addBattleLog(`${enemyPet.name}发出汪星咆哮！造成${fearDamage}点伤害！`);
                
                if (isFearSuccess) {
                    gameData.player.isStunned = true;
                    playerPetImg.classList.add('control-effect');
                    addBattleLog(`${playerPet.name}被恐惧了！下一回合无法行动！`);
                } else {
                    addBattleLog(`${playerPet.name}抵抗了恐惧效果！`);
                }
                setTimeout(() => playerPetImg.classList.remove('attack-effect', 'control-effect'), 1000);
            }
            break;
            
        case 'shit-attack':
            const shitDamage = calculateDamage(skill.damage, enemyPet, playerPet);
            gameData.player.hp = Math.max(0, gameData.player.hp - shitDamage);
            playerPetImg.classList.add('attack-effect');
            showShitEffect();
            addBattleLog(`${enemyPet.name}扔出一坨狗屎！${playerPet.name}受到${shitDamage}点伤害！`);
            setTimeout(() => playerPetImg.classList.remove('attack-effect'), 500);
            break;
            
        case 'self-harm-attack':
            const selfHarmDamage = calculateDamage(20, enemyPet, enemyPet);
            gameData.enemy.hp = Math.max(0, gameData.enemy.hp - selfHarmDamage);
            const enemyHarmDamage = calculateDamage(skill.damage, enemyPet, playerPet);
            gameData.player.hp = Math.max(0, gameData.player.hp - enemyHarmDamage);
            playerPetImg.classList.add('attack-effect');
            enemyPetImg.classList.add('attack-effect');
            addBattleLog(`${enemyPet.name}疯狂拆家！自身损失${selfHarmDamage}HP，对${playerPet.name}造成${enemyHarmDamage}点伤害！`);
            updateHpUI();
            setTimeout(() => {
                playerPetImg.classList.remove('attack-effect');
                enemyPetImg.classList.remove('attack-effect');
            }, 800);
            break;
            
        case 'damage-reduce':
            addBattleLog(`${enemyPet.name}购买了健身卡！后续受到的伤害减少20%！`);
            enemyPet.hasGymCard = true;
            enemyPetImg.classList.add('buff-effect');
            setTimeout(() => enemyPetImg.classList.remove('buff-effect'), 800);
            break;
            
        case 'dream':
            const dreamHealAmount = Math.abs(skill.damage);
            gameData.enemy.hp = Math.min(gameData.enemy.maxHp, gameData.enemy.hp + dreamHealAmount);
            enemyPetImg.src = enemyPet.dreamImg || enemyPet.img;
            enemyPetImg.classList.add('dream-effect');
            enemyPet.dreamTurns = 2;
            addBattleLog(`${enemyPet.name}使用了黄粱一梦！恢复${dreamHealAmount}点HP，但接下来2回合无法行动！`);
            setTimeout(() => enemyPetImg.classList.remove('dream-effect'), 1000);
            break;
            
        default:
            // 默认攻击
            const defaultDamage = calculateDamage(10, enemyPet, playerPet);
            gameData.player.hp = Math.max(0, gameData.player.hp - defaultDamage);
            playerPetImg.classList.add('attack-effect');
            addBattleLog(`${enemyPet.name}造成了${defaultDamage}点默认伤害！`);
            setTimeout(() => playerPetImg.classList.remove('attack-effect'), 500);
            break;
    }
    
    updateHpUI();
    
    if (checkBattleEnd()) return;
    
    setTimeout(endEnemyTurn, 1500);
}

// 结束敌方回合
function endEnemyTurn() {
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
    
    gameData.player.isStunned = false;
    gameData.enemy.isStunned = false;
    roundTip.style.display = 'none';
    gameData.currentRound++;
    setTimeout(startPlayerTurn, 1000);
}

// 重新开始游戏
function restartGame() {
    gameData.isBattleEnd = false;
    gameData.currentRound = 1;
    gameData.isEnemyTurn = false;
    gameData.player.immune = 0;
    gameData.enemy.immune = 0;
    
    Object.values(allPets).forEach(pet => {
        pet.hasGymCard = false;
        pet.dreamTurns = 0;
    });
    
    resultModal.style.display = 'none';
    resumeBGM();
    initGame();
}

// 初始化游戏
// 初始化游戏
function initGame() {
    // 确保DOM元素已加载
    if (!petSelectContainer || !battleContainer) {
        console.error('DOM元素未找到，请检查HTML结构');
        return;
    }
    
    // 显示宠物选择界面
    petSelectContainer.style.display = 'flex';
    battleContainer.style.display = 'none';
    
    // 重置游戏数据
    gameData.playerPetKey = null;
    gameData.isBattleEnd = false;
    gameData.currentRound = 1;
    gameData.isEnemyTurn = false;
    
    // 清除所有宠物选项的选中状态
    petOptions.forEach(option => option.classList.remove('selected'));
    
    // 重新绑定宠物选项点击事件
    petOptions.forEach(option => {
        // 先移除可能存在的旧事件监听器
        option.removeEventListener('click', petSelectHandler);
        option.addEventListener('click', petSelectHandler);
    });
    
    // 重新绑定开始战斗按钮点击事件
    startBattleBtn.removeEventListener('click', startBattleHandler);
    startBattleBtn.addEventListener('click', startBattleHandler);
    
    // 重新绑定重新开始按钮点击事件
    restartBtn.removeEventListener('click', restartGame);
    restartBtn.addEventListener('click', restartGame);
    
    // 确保技能池被清空
    skillPool.innerHTML = '';
    
    // 确保战斗日志被清空
    battleLog.innerHTML = '[系统] 战斗开始！';
    
    // 隐藏结果弹窗
    resultModal.style.display = 'none';
    
    // 重置回合提示
    roundTip.style.display = 'none';
}

// 页面加载完成后初始化游戏
window.addEventListener('DOMContentLoaded', initGame);
