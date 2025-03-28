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
  // 其余题目省略...
];

// 结果类型定义
const resultTypes = [
  {
    range: [10, 15],
    type: "安静型恋人",
    description: "你喜欢平静、稳定的感情，不需要轰轰烈烈。你向往的是能给你安全感的伴侣，能一起享受简单的日常。"
  },
  {
    range: [16, 20],
    type: "活力型恋人",
    description: "你喜欢有趣、活跃的恋爱方式，希望感情能带给你快乐和新鲜感。"
  },
  {
    range: [21, 40],
    type: "浪漫型恋人",
    description: "你是典型的情感丰富型，渴望甜蜜浪漫的感情。"
  }
];

// DOM元素初始化
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM已加载，开始初始化');
  
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
  
  // 检查DOM元素是否存在
  if (!startBtn) {
    console.error('未找到开始按钮');
    return;
  }
  
  // 开始测试
  function startQuiz() {
    console.log('开始测试');
    if (introScreen) introScreen.style.display = 'none';
    if (questionScreen) questionScreen.style.display = 'block';
    showQuestion(0);
  }
  
  // 显示问题
  function showQuestion(index) {
    console.log('显示问题', index);
    if (index >= questions.length) {
      console.error('问题索引超出范围');
      return;
    }
    
    const question = questions[index];
    if (questionTitle) questionTitle.textContent = `${question.id}. ${question.title}`;
    
    // 清空选项
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      
      // 添加选项
      question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
          <span class="option-label">${option.label}</span>
          <span class="option-text">${option.text}</span>
        `;
        
        optionElement.addEventListener('click', function() {
          selectOption(option.value);
        });
        
        optionsContainer.appendChild(optionElement);
      });
    }
    
    // 更新进度
    if (currentQuestionElem) currentQuestionElem.textContent = index + 1;
    if (progressBar) {
      const progress = ((index + 1) / questions.length) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }
  
  // 选择选项
  function selectOption(value) {
    console.log('选择了选项', value);
    userAnswers[currentQuestionIndex] = value;
    score += value;
    
    // 高亮选项
    if (optionsContainer) {
      const options = optionsContainer.querySelectorAll('.option');
      options.forEach((option, index) => {
        if (index === value - 1) {
          option.classList.add('selected');
        } else {
          option.classList.remove('selected');
        }
      });
    }
    
    // 延迟跳转
    setTimeout(function() {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      } else {
        showResult();
      }
    }, 700);
  }
  
  // 显示结果
  function showResult() {
    console.log('显示结果');
    if (questionScreen) questionScreen.style.display = 'none';
    if (resultScreen) resultScreen.style.display = 'block';
    if (finalScoreElem) finalScoreElem.textContent = score;
    
    // 显示结果类型
    const resultType = getResultType(score);
    if (resultTypeElem) resultTypeElem.textContent = resultType.type;
    if (resultDescriptionElem) resultDescriptionElem.textContent = resultType.description;
  }
  
  // 获取结果类型
  function getResultType(score) {
    for (const result of resultTypes) {
      if (score >= result.range[0] && score <= result.range[1]) {
        return result;
      }
    }
    return resultTypes[0];
  }
  
  // 显示弹窗
  function showResultModal() {
    console.log('显示弹窗');
    if (resultModal) resultModal.style.display = 'flex';
  }
  
  // 关闭弹窗
  function closeResultModal() {
    console.log('关闭弹窗');
    if (resultModal) resultModal.style.display = 'none';
  }
  
  // 绑定事件
  console.log('绑定事件');
  startBtn.addEventListener('click', startQuiz);
  if (resultBtn) resultBtn.addEventListener('click', showResultModal);
  if (closeModal) closeModal.addEventListener('click', closeResultModal);
  
  console.log('初始化完成');
}); 