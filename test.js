var question = new Array(1);//问题列表
var answer= new Array(1);//答案列表



//点击模拟
y = 'ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLCData_0';
n = 'ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLCData_1';
a = 'ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLAData_0' ;
b = 'ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLAData_1';
c = 'ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLAData_2';
d = 'ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLAData_3';
e = "ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLBData_0";
f = "ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLBData_1";
g = "ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLBData_2";
h = "ctl00_ContentPlaceHolder1_DataGridA_ctl02_RBLBData_3";



function select_answer()
{
    var select="null";
if(document.getElementById(n))
{
    document.getElementById(n).click();
    select="n";
}
else if(document.getElementById(y))
{
    document.getElementById(y).click();
    select="y";
}
//********************************************/ */
if(document.getElementById(a))
{
    document.getElementById(a).click();
    select="a";
}
if(document.getElementById(b))
{
    document.getElementById(b).click();
    select="b";
}
if(document.getElementById(c))
{
    document.getElementById(c).click();
    select="c";
}
if(document.getElementById(d))
{
    document.getElementById(d).click();
    select="d";
}
if(document.getElementById(e))
{
    document.getElementById(e).click();
    select="e";
}
if(document.getElementById(f))
{
    document.getElementById(f).click();
    select="f";
}
if(document.getElementById(g))
{
    document.getElementById(g).click();
    select="g";
}
if(document.getElementById(h))
{
    document.getElementById(h).click();
    select="h";
}
console.log("选择完毕----------------------------------------------------------------------");
    return select;
}

function get_Title()
{
    //问题获取
    Title_id="ctl00_ContentPlaceHolder1_DataGridA_ctl02_labADataTitle";
    var content=document.getElementById(Title_id).innerText;
    console.log(content);
    question.push(content);

}
function get_submit()
{
    //模拟提交
    submit_id="ctl00_ContentPlaceHolder1_btnOk";
    document.getElementById(submit_id).click();
    console.log("提交完毕----------------------------------------------------------------------");
    return true;
}
function get_answer(select)
{
     //获取答案
     ture_answer_id="ctl00_ContentPlaceHolder1_DataGridA_ctl02_divRight" 
     false_answer_id="ctl00_ContentPlaceHolder1_DataGridA_ctl02_divWrong" 
     if(document.getElementById(ture_answer_id))
     {
     answer.push(select);
     console.log("true");
     }
     else if(document.getElementById(false_answer_id) )
    {
        Correct_answer_content=document.getElementById(false_answer_id).innerText;
        answer.push(Correct_answer_content);
        console.log("false");
    }
    console.log("获取答案----------------------------------------------------------------------");

}

//<input type="submit" name="ctl00$ContentPlaceHolder1$btnNext" value="下一题" id="ctl00_ContentPlaceHolder1_btnNext" class="btn" style="width:60px;"></input>
function next(){
    //下一题
    next_id="ctl00_ContentPlaceHolder1_btnNext";
    document.getElementById(next_id).click();
    console.log("下一题----------------------------------------------------------------------");
    return false;
}

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}
async function test() {

    select_answer();
    await sleep(1000);
    get_Title();
    get_submit();
    await sleep(1000);
    get_answer()
    next();
    await sleep(1000);
}
async  function nnext() {
    for(var i=0;i<130;i++)
    {
        test();
        await sleep(1000);
    }
}

nnext();



