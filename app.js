const text = document.getElementById("text");
const 上一个问题 = document.getElementById("上一个问题");
const 下一个问题 = document.getElementById("下一个问题");
const 目前问题id= document.getElementById("目前问题id");
const oszes = document.getElementById("oszes");

var 问题数量 = 50 ;
var  问题id = 1 ;

function 刷新(){
    目前问题id.innerHTML = "第" + 问题id + "题"
    oszes.innerHTML = "还剩" + (问题数量-问题id) +"题"
}
刷新()


text.innerHTML = 题目库(问题id)
function 题目库(id) {
    /* '<h2>问题《》</h2>《》<br><form id="myForm">&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="《》">&ensp;《》</label><br>&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="《》">&ensp;《》</label><br>&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="《》">&ensp;《》</label><br>&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="《》">&ensp;《》</label><br>&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="《》">&ensp;《》</label><br>&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="《》">&ensp;《》</label><br></form>' */
    if (id == 1) {
        var text1 = '<h2>问题一</h2>你觉得你穿越到异世界是死后重生到异世界，还是没死是被谁召唤到异世界的并且事后还可以回去。<br><form id="myForm">&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="1">&ensp;没死是被谁召唤到异世界的并且事后还可以回去</label><br>&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="2">&ensp;死后重生到异世界</label></form>'
        return text1
    }
    else if (id == 2) {
        var text1 = '<h2>问题二</h2>你觉得你穿越到异世界是死后重生到异世界，还是没死是被谁召唤到异世界的并且事后还可以回去。<br><form id="myForm">&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="1">&ensp;死后重生到异世界</label><br>&ensp;&ensp;<label><input type="radio" class="选择题按钮" name="answer" value="2">&ensp;没死是被谁召唤到异世界的并且事后还可以回去</label></form>'
        return text1
    }
}


下一个问题.addEventListener("click",()=>{

    if (问题id < 问题数量){
        if (记录选择() == true) {
            问题id = 问题id + 1
            刷新()
            text.innerHTML = 题目库(问题id)
        }
    }
    
});



上一个问题.addEventListener("click",()=>{
    if (问题id > 1) {
        撤回选择()
        问题id = 问题id - 1
        刷新()
        text.innerHTML = 题目库(问题id)
    }
});

//撤回选择
function 撤回选择() {
    if (上一次选择 = 1) {
        自信 = 自信 - 1;
    }
    else if (上一次选择 = 2) {
        天真 = 天真 - 1;
    }
    else if (上一次选择 = 3) {
        勇敢 = 勇敢 - 1;
    }
    else if (上一次选择 = 4) {
        善恶 = 善恶 - 1;
    }
    else if (上一次选择 = 5) {
        野心 = 野心 - 1;
    }
    else if (上一次选择 = 6) {
        智商 = 智商 - 1;
    }
}



// 记录选择
var 自信 = 0 ;
var 天真 = 0 ;
var 勇敢 = 0 ;
var 善恶 = 0 ;
var 野心 = 0 ;
var 智商 = 0 ;

var 上一次选择 = 0 ;

function 记录选择() {
    // 获取用户选择的选项
    const selectedOption = document.querySelector('input[name="answer"]:checked').value;

    // 根据选项执行相应的操作
    if (selectedOption === "1") {
      // 执行选项 1 的操作
      自信 = 自信 + 1;
      上一次选择 = 1
      return true
    } 
    else if (selectedOption === "2") {
      // 执行选项 2 的操作
      天真 = 天真 + 1;
      上一次选择 = 2
      return true  
    } 
    else if (selectedOption === "3") {
      // 执行选项 3 的操作
      勇敢 = 勇敢 + 1;
      上一次选择 = 3
      return true
    }
    else if (selectedOption === "4") {
      // 执行选项 4 的操作
      善恶 = 善恶 + 1;
      上一次选择 = 4
      return true
    }
    else if (selectedOption === "5") {
      // 执行选项 5 的操作
      野心 = 野心 + 1;
      上一次选择 = 5
      return true
    }
    else if (selectedOption === "6") {
      // 执行选项 6 的操作
      智商 = 智商 + 1;
      上一次选择 = 6
      return true
    }
    else {
        return false
    }
};