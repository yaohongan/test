// 题目数据
const questions = [
  {
    id: 1,
    title: "周末你最喜欢怎么安排？",
    options: [
      { label: "A", text: "宅家刷剧、看书，享受独处时光", value: 1 },
      { label: "B", text: "约朋友出去玩，热闹才有意思！", value: 2 },
      { label: "C", text: "和喜欢的人一起做饭、散步，享受二人世界", value: 3 },
      { label: "D", text: "参加兴趣活动或社交局，认识新朋友", value: 4 }
    ]
  },
  {
    id: 2,
    title: "吵架时，你通常会怎么做？",
    options: [
      { label: "A", text: "先冷静，不想在气头上说话", value: 1 },
      { label: "B", text: "直接说出来，吵完就翻篇", value: 2 },
      { label: "C", text: "希望对方主动哄你，不然会难过", value: 3 },
      { label: "D", text: "理性分析问题，尽量不情绪化", value: 4 }
    ]
  },
  {
    id: 3,
    title: "你最看重伴侣的哪个特质？",
    options: [
      { label: "A", text: "靠谱、踏实，能给你安全感", value: 1 },
      { label: "B", text: "有趣、会玩，生活不无聊", value: 2 },
      { label: "C", text: "温柔体贴，能照顾你的情绪", value: 3 },
      { label: "D", text: "聪明独立，有自己热爱的事", value: 4 }
    ]
  },
  {
    id: 4,
    title: "你想象中的约会场景是？",
    options: [
      { label: "A", text: "安静的咖啡馆或家里，聊聊天", value: 1 },
      { label: "B", text: "游乐园、旅行，一起疯玩", value: 2 },
      { label: "C", text: "浪漫晚餐、海边散步，氛围感拉满", value: 3 },
      { label: "D", text: "一起参加讲座、展览，交流想法", value: 4 }
    ]
  },
  {
    id: 5,
    title: "你对个人空间的看法是？",
    options: [
      { label: "A", text: "非常重要！再爱也需要独处时间", value: 1 },
      { label: "B", text: "偶尔需要，但更喜欢分享生活", value: 2 },
      { label: "C", text: "希望和伴侣黏在一起，分开会想念", value: 3 },
      { label: "D", text: "看心情，有时想独处，有时想腻歪", value: 4 }
    ]
  },
  {
    id: 6,
    title: "你容易被哪种人吸引？",
    options: [
      { label: "A", text: "成熟稳重，话不多但靠谱", value: 1 },
      { label: "B", text: "阳光开朗，能带动气氛", value: 2 },
      { label: "C", text: "细腻温柔，能懂你的情绪", value: 3 },
      { label: "D", text: "有想法有才华，让你崇拜", value: 4 }
    ]
  },
  {
    id: 7,
    title: "你觉得爱情里最重要的是？",
    options: [
      { label: "A", text: "信任和忠诚，彼此安心", value: 1 },
      { label: "B", text: "快乐和新鲜感，不想太沉闷", value: 2 },
      { label: "C", text: "陪伴和安全感，像家人一样", value: 3 },
      { label: "D", text: "共同成长，互相激励", value: 4 }
    ]
  },
  {
    id: 8,
    title: "如果伴侣临时放你鸽子，你会？",
    options: [
      { label: "A", text: "无所谓，自己找点事做", value: 1 },
      { label: "B", text: "有点失望，但马上找朋友玩", value: 2 },
      { label: "C", text: "不开心，希望TA之后补偿你", value: 3 },
      { label: "D", text: "问清原因，如果是正事就理解", value: 4 }
    ]
  },
  {
    id: 9,
    title: "你更喜欢哪种沟通方式？",
    options: [
      { label: "A", text: "文字聊天，有缓冲时间", value: 1 },
      { label: "B", text: "当面聊，直来直去", value: 2 },
      { label: "C", text: "希望TA能察觉你的情绪，不用明说", value: 3 },
      { label: "D", text: "讲逻辑，把事情说清楚", value: 4 }
    ]
  },
  {
    id: 10,
    title: "你理想的未来生活是？",
    options: [
      { label: "A", text: "平淡温馨，细水长流", value: 1 },
      { label: "B", text: "充满惊喜，经常尝试新事物", value: 2 },
      { label: "C", text: "互相依赖，像最好的朋友+恋人", value: 3 },
      { label: "D", text: "各自有事业，但精神上很契合", value: 4 }
    ]
  }
];

// 结果类型定义
const resultTypes = [
  {
    range: [10, 15],
    type: "安静型恋人",
    description: "你喜欢平静、稳定的感情，不需要轰轰烈烈。你向往的是能给你安全感的伴侣，能一起享受简单的日常。你的理想恋人应该是踏实可靠、尊重你的个人空间、能与你一起慢慢经营感情的人。"
  },
  {
    range: [16, 20],
    type: "活力型恋人",
    description: "你喜欢有趣、活跃的恋爱方式，希望感情能带给你快乐和新鲜感。你的理想伴侣应该阳光开朗，善于制造惊喜，能和你一起尝试新事物，让生活充满变化和乐趣。"
  },
  {
    range: [21, 25],
    type: "浪漫型恋人",
    description: "你是典型的情感丰富型，渴望甜蜜浪漫的感情。你希望伴侣能细心体贴，懂得照顾你的情绪，愿意为感情付出。你喜欢亲密的关系，希望两个人能像家人一样相互依赖、无话不说。"
  },
  {
    range: [26, 30],
    type: "独立型恋人",
    description: "你既渴望亲密关系，又重视个人发展。你理想的伴侣应该是独立、有思想的人，能尊重你的选择，与你共同成长。你们的关系建立在互相欣赏和精神契合的基础上，彼此支持却不过度依赖。"
  },
  {
    range: [31, 35],
    type: "平衡型恋人",
    description: "你善于平衡亲密与独立，希望恋人既能陪伴你，也能理解你需要自己的空间。你寻找的是一段既有激情又有默契的关系，能够互相支持彼此的梦想，同时也能一起享受生活的美好。"
  },
  {
    range: [36, 40],
    type: "理想型恋人",
    description: "你对爱情有着高标准，希望找到能在各方面都与你匹配的人。你追求的是深层次的精神连接和共同成长。你的理想伴侣应该聪明、独立、有自己的追求，同时也能欣赏你的才华和梦想。"
  }
];

// 获取DOM元素
const introScreen = document.getElementById('intro-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const currentQuestionElem = document.getElementById('current-question');
const progressBar = document.getElementById('progress');
const finalScoreElem = document.getElementById('final-score');
const resultTypeElem = document.getElementById('result-type');
const resultDescriptionElem = document.getElementById('result-description');
const resultBtn = document.getElementById('result-btn');
const resultModal = document.getElementById('result-modal');
const closeModal = document.getElementById('close-modal');

// 状态变量
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// 统计人数函数
function updateStatistics() {
  try {
    // 只使用localStorage，不使用URL参数
    let totalTests = parseInt(localStorage.getItem('totalTests') || 0);
    let completedTests = parseInt(localStorage.getItem('completedTests') || 0);
    
    // 是否已记录过当前会话
    const sessionRecorded = sessionStorage.getItem('testRecorded');
    
    // 如果会话未记录，更新总测试人数
    if (!sessionRecorded) {
      totalTests += 1;
      localStorage.setItem('totalTests', totalTests);
      sessionStorage.setItem('testRecorded', 'true');
    }
    
    return { totalTests, completedTests };
  } catch (e) {
    console.error('统计更新错误', e);
    return { totalTests: 0, completedTests: 0 };
  }
}

// 更新完成测试人数
function updateCompletedTests() {
  try {
    // 只使用localStorage，不使用URL参数
    let totalTests = parseInt(localStorage.getItem('totalTests') || 0);
    let completedTests = parseInt(localStorage.getItem('completedTests') || 0);
    
    completedTests += 1;
    localStorage.setItem('completedTests', completedTests);
    
    return { totalTests, completedTests };
  } catch (e) {
    console.error('完成统计更新错误', e);
    return { totalTests: 0, completedTests: 0 };
  }
}

// 初始化
startBtn.addEventListener('click', startQuiz);
resultBtn.addEventListener('click', showResultModal);
closeModal.addEventListener('click', closeResultModal);

// 加载时更新统计
document.addEventListener('DOMContentLoaded', function() {
  updateStatistics();
});

// 开始测试
function startQuiz() {
  introScreen.style.display = 'none';
  questionScreen.style.display = 'block';
  showQuestion(currentQuestionIndex);
  
  // 更新统计数据
  updateStatistics();
}

// 显示当前问题
function showQuestion(index) {
  const question = questions[index];
  questionTitle.textContent = `${question.id}. ${question.title}`;
  
  // 清空选项容器
  optionsContainer.innerHTML = '';
  
  // 添加选项
  question.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.innerHTML = `
      <span class="option-label">${option.label}</span>
      <span class="option-text">${option.text}</span>
    `;
    
    optionElement.addEventListener('click', () => selectOption(option.value));
    optionsContainer.appendChild(optionElement);
  });
  
  // 更新进度
  currentQuestionElem.textContent = index + 1;
  const progress = ((index + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// 选择选项
function selectOption(value) {
  // 保存答案
  userAnswers[currentQuestionIndex] = value;
  score += value;
  
  // 高亮选中选项
  const options = optionsContainer.querySelectorAll('.option');
  options.forEach((option, index) => {
    if (index === value - 1) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });
  
  // 延迟后跳转到下一题
  setTimeout(() => {
    // 如果还有下一题
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    } else {
      // 显示结果
      showResult();
    }
  }, 700);
}

// 显示结果
function showResult() {
  questionScreen.style.display = 'none';
  resultScreen.style.display = 'block';
  finalScoreElem.textContent = score;
  
  // 更新完成测试的人数
  updateCompletedTests();
}

// 显示结果弹窗
function showResultModal() {
  resultModal.style.display = 'flex';
}

// 关闭结果弹窗
function closeResultModal() {
  resultModal.style.display = 'none';
}

// 添加轻触效果
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.98)';
  });
  
  button.addEventListener('mouseup', () => {
    button.style.transform = '';
  });
});

// 移动端滑动效果
let touchStartX = 0;
let touchEndX = 0;

questionScreen.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

questionScreen.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  // 向左滑动，下一题
  if (touchEndX < touchStartX - 50 && currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
  // 向右滑动，上一题
  else if (touchEndX > touchStartX + 50 && currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
} 