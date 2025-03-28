// 测试问题数据
const questions = [
  {
    question: "当你遇到恋爱问题时，你通常会怎么做？",
    options: [
      "直接找伴侣沟通解决",
      "先自己思考，再找合适时机沟通",
      "找朋友倾诉寻求建议",
      "回避问题，期待它自行解决"
    ]
  },
  {
    question: "在一段恋爱关系中，你最看重的是什么？",
    options: [
      "深厚的情感连接",
      "共同的价值观和人生目标",
      "互相支持和尊重",
      "新鲜感和刺激"
    ]
  },
  {
    question: "如果伴侣忘记了你们的纪念日，你会怎么反应？",
    options: [
      "坦诚表达失望，但理解对方",
      "提醒对方并计划一个补偿活动",
      "假装不在意，但内心感到失落",
      "生气并责备对方不重视关系"
    ]
  },
  {
    question: "在恋爱中，你更偏向于：",
    options: [
      "主动付出，喜欢照顾对方",
      "寻求平衡，付出与获得相当",
      "较为被动，享受被照顾的感觉",
      "根据情况灵活调整"
    ]
  },
  {
    question: "当你们意见不合时，你通常会：",
    options: [
      "寻求妥协，找到双方都能接受的解决方案",
      "坚持自己的观点，试图说服对方",
      "暂时避开话题，等情绪平静后再讨论",
      "顺从对方以避免争吵"
    ]
  },
  {
    question: "你认为长期恋爱关系中最重要的因素是：",
    options: [
      "良好的沟通和理解",
      "持续的吸引力和激情",
      "安全感和稳定性",
      "成长空间和个人自由"
    ]
  },
  {
    question: "面对伴侣的过错，你通常会：",
    options: [
      "冷静讨论，共同寻找解决方案",
      "表达自己的不满，但尝试理解对方",
      "给予包容，但希望对方知道错误",
      "逃避或者过度反应"
    ]
  },
  {
    question: "在恋爱中面对压力时，你会：",
    options: [
      "与伴侣共同面对，互相支持",
      "尝试独自解决，不想让伴侣担心",
      "寻求外部帮助（家人、朋友）",
      "压力下容易情绪失控"
    ]
  },
  {
    question: "关于恋爱中的个人空间，你的看法是：",
    options: [
      "尊重彼此的个人空间是健康关系的必要条件",
      "适当的个人空间有助于关系长久",
      "更喜欢亲密无间，不太需要个人空间",
      "担心过多个人空间会导致疏远"
    ]
  },
  {
    question: "你认为自己在恋爱中最需要改进的方面是：",
    options: [
      "表达情感的能力",
      "耐心和包容度",
      "独立性和自信",
      "对关系的投入和承诺"
    ]
  }
];

// 结果类型
const resultTypes = [
  {
    title: "情感专家",
    description: "你在恋爱关系中展现出卓越的情感智慧和沟通能力。你重视真诚交流，善于倾听和理解伴侣的需求，同时也能清晰表达自己的期望。你知道如何处理冲突，寻求共赢的解决方案，并且尊重彼此的个人空间。这种平衡的态度使你的恋爱关系稳定而健康。",
    minScore: 30
  },
  {
    title: "平衡者",
    description: "你在恋爱中寻求平衡与和谐。你理解妥协的重要性，能够在关系中找到付出与获取的平衡点。虽然有时可能面临沟通挑战，但你愿意努力解决问题。你尊重伴侣的意见，也坚持自己的核心价值观。这种平衡的态度为长期关系奠定了良好基础。",
    minScore: 23
  },
  {
    title: "情感探索者",
    description: "你对恋爱关系充满好奇和探索精神。你珍视真实的情感连接，但有时可能在亲密关系中感到不确定。你正在学习如何更好地表达自己的需求，同时理解伴侣的期望。你有很大的成长潜力，随着经验的积累，你的恋爱能力将会显著提升。",
    minScore: 17
  },
  {
    title: "恋爱新手",
    description: "你在恋爱关系中还处于学习阶段。你可能面临沟通障碍，或在处理冲突时感到困难。有时你可能过度依赖或过于独立。不要担心，这是成长的一部分。通过多倾听、坦诚表达，以及学习尊重彼此的差异，你可以逐步提升自己的恋爱能力。",
    minScore: 10
  }
];

// 全局变量
let currentQuestion = 0;
let userAnswers = [];
let startBtn, questionScreen, resultScreen, startScreen;
let questionText, optionsContainer, currentQuestionSpan, totalQuestionsSpan;
let resultTitle, resultDescription, scoreValue;
let shareBtn, restartBtn, copyBtn, shareLink, copyMessage, shareContainer;
let progressFill;

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
  // 获取DOM元素
  startBtn = document.getElementById('start-btn');
  startScreen = document.getElementById('start-screen');
  questionScreen = document.getElementById('question-screen');
  resultScreen = document.getElementById('result-screen');
  
  questionText = document.getElementById('question-text');
  optionsContainer = document.getElementById('options-container');
  currentQuestionSpan = document.getElementById('current-question');
  totalQuestionsSpan = document.getElementById('total-questions');
  
  resultTitle = document.getElementById('result-title');
  resultDescription = document.getElementById('result-description');
  scoreValue = document.getElementById('score-value');
  
  shareBtn = document.getElementById('share-btn');
  restartBtn = document.getElementById('restart-btn');
  shareContainer = document.getElementById('share-container');
  shareLink = document.getElementById('share-link');
  copyBtn = document.getElementById('copy-btn');
  copyMessage = document.getElementById('copy-message');
  
  progressFill = document.querySelector('.progress-fill');
  
  // 设置总问题数
  totalQuestionsSpan.textContent = questions.length;
  
  // 添加事件监听
  startBtn.addEventListener('click', startQuiz);
  shareBtn.addEventListener('click', toggleShareContainer);
  restartBtn.addEventListener('click', restartQuiz);
  copyBtn.addEventListener('click', copyShareLink);
  
  // 检查URL参数是否有分享结果
  checkForSharedResult();
});

// 开始测试
function startQuiz() {
  startScreen.classList.remove('active');
  questionScreen.classList.add('active');
  showQuestion();
}

// 显示问题
function showQuestion() {
  // 更新进度条
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  
  // 更新当前问题
  currentQuestionSpan.textContent = currentQuestion + 1;
  
  // 加载问题内容
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  
  // 清空选项容器
  optionsContainer.innerHTML = '';
  
  // 加载选项
  question.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${option}</span>
    `;
    
    optionElement.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(optionElement);
  });
}

// 选择选项
function selectOption(optionIndex) {
  // 保存用户回答
  userAnswers[currentQuestion] = optionIndex;
  
  // 高亮选中选项
  const options = optionsContainer.querySelectorAll('.option');
  options.forEach((option, index) => {
    if (index === optionIndex) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });
  
  // 延迟后进入下一题
  setTimeout(() => {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 500);
}

// 显示测试结果
function showResult() {
  // 记录测试完成
  recordCompletion();
  
  // 切换到结果屏幕
  questionScreen.classList.remove('active');
  resultScreen.classList.add('active');
  
  // 计算得分
  const score = calculateScore();
  
  // 根据得分确定结果类型
  const result = getResultType(score);
  
  // 更新结果显示
  resultTitle.textContent = result.title;
  resultDescription.textContent = result.description;
  
  // 计算并显示百分比得分
  const percentageScore = Math.round((score / (questions.length * 3)) * 100);
  scoreValue.textContent = percentageScore;
  
  // 动画展示得分
  animateScore(percentageScore);
  
  // 生成分享链接
  generateShareLink(result.title, percentageScore);
}

// 计算得分
function calculateScore() {
  return userAnswers.reduce((total, answer) => total + (3 - answer), 0);
}

// 获取结果类型
function getResultType(score) {
  for (let i = 0; i < resultTypes.length; i++) {
    if (score >= resultTypes[i].minScore) {
      return resultTypes[i];
    }
  }
  return resultTypes[resultTypes.length - 1];
}

// 得分动画
function animateScore(targetScore) {
  let currentScore = 0;
  const duration = 1500; // 1.5秒
  const interval = 16; // ~60fps
  const steps = duration / interval;
  const increment = targetScore / steps;
  
  const timer = setInterval(() => {
    currentScore += increment;
    if (currentScore >= targetScore) {
      currentScore = targetScore;
      clearInterval(timer);
    }
    scoreValue.textContent = Math.round(currentScore);
  }, interval);
}

// 生成分享链接
function generateShareLink(resultTitle, score) {
  const url = new URL(window.location.href);
  url.searchParams.set('result', encodeURIComponent(resultTitle));
  url.searchParams.set('score', score);
  
  shareLink.value = url.toString();
}

// 切换分享容器显示
function toggleShareContainer() {
  if (shareContainer.style.display === 'block') {
    shareContainer.style.display = 'none';
  } else {
    shareContainer.style.display = 'block';
  }
}

// 复制分享链接
function copyShareLink() {
  shareLink.select();
  document.execCommand('copy');
  
  copyMessage.textContent = '链接已复制!';
  copyMessage.style.display = 'block';
  
  setTimeout(() => {
    copyMessage.style.display = 'none';
  }, 2000);
}

// 重新开始测试
function restartQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  
  resultScreen.classList.remove('active');
  startScreen.classList.add('active');
  
  shareContainer.style.display = 'none';
}

// 检查分享结果
function checkForSharedResult() {
  const urlParams = new URLSearchParams(window.location.search);
  
  if (urlParams.has('result') && urlParams.has('score')) {
    const sharedResult = decodeURIComponent(urlParams.get('result'));
    const sharedScore = urlParams.get('score');
    
    // 找到匹配的结果类型
    const resultType = resultTypes.find(type => type.title === sharedResult) || resultTypes[0];
    
    // 显示结果屏幕
    startScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // 更新结果显示
    resultTitle.textContent = resultType.title;
    resultDescription.textContent = resultType.description;
    scoreValue.textContent = sharedScore;
    
    // 生成分享链接
    generateShareLink(resultType.title, sharedScore);
  }
} 