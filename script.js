// 问题列表
const questions = [
  {
    question: "你更喜欢哪种约会方式？",
    options: ["一起看电影", "共进晚餐", "户外活动", "居家休闲"]
  },
  {
    question: "当与恋人产生分歧时，你通常会怎么做？",
    options: ["坦诚沟通", "先冷静思考", "寻求朋友建议", "暂时回避"]
  },
  {
    question: "你认为恋爱关系中最重要的是什么？",
    options: ["信任与理解", "激情与新鲜感", "共同的价值观", "个人空间"]
  },
  {
    question: "你喜欢恋人用什么方式表达爱意？",
    options: ["言语表达", "行动付出", "送礼物", "肢体接触"]
  },
  {
    question: "你理想中的伴侣应该是什么样的？",
    options: ["成熟稳重", "温柔体贴", "有趣幽默", "独立自主"]
  },
  {
    question: "你会为了爱情做出哪些改变？",
    options: ["改变生活习惯", "调整职业规划", "搬到对方城市", "保持自我不变"]
  },
  {
    question: "长期关系中，你最担心的是什么？",
    options: ["缺乏沟通", "激情消退", "价值观冲突", "失去自我"]
  },
  {
    question: "你认为浪漫的表现是什么？",
    options: ["惊喜与仪式感", "日常的关心", "共同成长", "尊重彼此空间"]
  },
  {
    question: "面对感情危机，你会怎么处理？",
    options: ["积极寻求解决方案", "等待对方先行动", "寻求专业帮助", "考虑结束关系"]
  },
  {
    question: "你希望与伴侣共度的最理想周末是？",
    options: ["短途旅行", "一起宅家", "各自做各自的事", "参加社交活动"]
  }
];

// 初始化变量
let currentQuestion = 0;
let score = 0;

// DOM元素
const progressBar = document.getElementById('progress');
const currentQuestionElem = document.getElementById('current-question');
const introScreen = document.getElementById('intro-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const finalScore = document.getElementById('final-score');
const resultModal = document.getElementById('result-modal');
const closeModal = document.getElementById('close-modal');

// 启动测试
document.getElementById('start-btn').addEventListener('click', function() {
  introScreen.style.display = 'none';
  questionScreen.style.display = 'block';
  loadQuestion();
});

// 显示结果按钮事件
document.getElementById('result-btn').addEventListener('click', function() {
  resultModal.style.display = 'flex';
});

// 关闭弹窗
closeModal.addEventListener('click', function() {
  resultModal.style.display = 'none';
});

// 点击窗口外部关闭弹窗
window.addEventListener('click', function(event) {
  if (event.target == resultModal) {
    resultModal.style.display = 'none';
  }
});

// 加载问题
function loadQuestion() {
  // 更新进度条
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  
  // 更新问题计数
  currentQuestionElem.textContent = currentQuestion + 1;
  
  // 设置问题标题
  const questionData = questions[currentQuestion];
  questionTitle.textContent = questionData.question;
  
  // 清空选项容器
  optionsContainer.innerHTML = '';
  
  // 添加选项
  questionData.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    
    const optionLabel = document.createElement('span');
    optionLabel.className = 'option-label';
    optionLabel.textContent = String.fromCharCode(65 + index); // A, B, C, D
    
    const optionText = document.createElement('span');
    optionText.textContent = option;
    
    optionElement.appendChild(optionLabel);
    optionElement.appendChild(optionText);
    
    // 添加点击事件
    optionElement.addEventListener('click', function() {
      selectOption(index);
    });
    
    optionsContainer.appendChild(optionElement);
  });
}

// 选择选项
function selectOption(optionIndex) {
  // 计分 (A=1, B=2, C=3, D=4)
  score += optionIndex + 1;
  
  // 高亮选中的选项
  const options = optionsContainer.querySelectorAll('.option');
  options.forEach((option, index) => {
    if (index === optionIndex) {
      option.classList.add('selected');
    }
  });
  
  // 延迟后进入下一题
  setTimeout(() => {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 800);
}

// 显示结果
function showResult() {
  questionScreen.style.display = 'none';
  resultScreen.style.display = 'block';
  finalScore.textContent = score;
  
  // 记录测试完成
  recordCompletion();
}

// 重置测试
function resetTest() {
  currentQuestion = 0;
  score = 0;
  introScreen.style.display = 'block';
  questionScreen.style.display = 'none';
  resultScreen.style.display = 'none';
  progressBar.style.width = '10%';
} 