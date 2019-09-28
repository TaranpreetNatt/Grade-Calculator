
const grade1 = document.getElementById("grade1");
const total1 = document.getElementById("total1");

const grade2 = document.getElementById("grade2");
const total2 = document.getElementById("total2");

const grade3 = document.getElementById("grade3");
const total3 = document.getElementById("total3");

const grade4 = document.getElementById("grade4");
const total4 = document.getElementById("total4");

grade1.addEventListener('input', calculate1);
total1.addEventListener('input', calculate1);

grade2.addEventListener('input', calculate2);
total2.addEventListener('input', calculate2);

grade3.addEventListener('input', calculate3);
total3.addEventListener('input', calculate3);

grade4.addEventListener('input', calculate4);
total4.addEventListener('input', calculate4);

function clearAll() {
  document.getElementById("mean").innerHTML = "";

  document.getElementById("percent1").innerHTML = "";
  document.getElementById("percent2").innerHTML = "";
  document.getElementById("percent3").innerHTML = "";
  document.getElementById("percent4").innerHTML = "";

  document.getElementById("weightForm1").reset();
  document.getElementById("gradeForm1").reset();

  document.getElementById("weightForm2").reset();
  document.getElementById("gradeForm2").reset();

  document.getElementById("weightForm3").reset();
  document.getElementById("gradeForm3").reset();

  document.getElementById("weightForm4").reset();
  document.getElementById("gradeForm4").reset();
  
}

function mean(){
  const grade1 = parseInt(document.getElementById("grade1").value);
  const total1 = parseInt(document.getElementById("total1").value);

  const grade2 = parseInt(document.getElementById("grade2").value);
  const total2 = parseInt(document.getElementById("total2").value);

  const grade3 = parseInt(document.getElementById("grade3").value);
  const total3 = parseInt(document.getElementById("total3").value);

  const grade4 = parseInt(document.getElementById("grade4").value);
  const total4 = parseInt(document.getElementById("total4").value);

  const meanArr = [
    {grade: grade1, total: total1},
    {grade: grade2, total: total2},
    {grade: grade3, total: total3},
    {grade: grade4, total: total4},
  ];

  let counter = 0;
  let total = 0;
  
  for(let i = 0; i < meanArr.length ; i++) {
    if(meanArr[i].grade && meanArr[i].total){
      total += meanArr[i].grade / meanArr[i].total
      counter += 1;
    }
  }

  total = (total / counter) * 100;
   if((total % 1) === 0) {
    total = total.toFixed(0);
  }
  else {
    total = total.toFixed(1);
  }

  if(!isFinite(total)) document.getElementById("mean").innerHTML = "";

  if(isFinite(total)) document.getElementById("mean").innerHTML = total + "/100";
}

function weight() {
  const grade1 = parseInt(document.getElementById("grade1").value);
  const total1 = parseInt(document.getElementById("total1").value);
  const weight1 = parseInt(document.getElementById("weight1").value);

  const grade2 = parseInt(document.getElementById("grade2").value);
  const total2 = parseInt(document.getElementById("total2").value);
  const weight2 = parseInt(document.getElementById("weight2").value);

  const grade3 = parseInt(document.getElementById("grade3").value);
  const total3 = parseInt(document.getElementById("total3").value);
  const weight3 = parseInt(document.getElementById("weight3").value);

  const grade4 = parseInt(document.getElementById("grade4").value);
  const total4 = parseInt(document.getElementById("total4").value);
  const weight4 = parseInt(document.getElementById("weight4").value);

  const meanArr = [
    {grade: grade1, total: total1, weight: weight1},
    {grade: grade2, total: total2, weight: weight2},
    {grade: grade3, total: total3, weight: weight3},
    {grade: grade4, total: total4, weight: weight4},
  ];

  let counter = 0;
  let total = 0;
  
  for(let i = 0; i < meanArr.length ; i++) {
    if(meanArr[i].grade && meanArr[i].total){
      total += (meanArr[i].grade / meanArr[i].total) * meanArr[i].weight;
      counter += meanArr[i].weight;
    }
  }

  total = (total / counter) * 100;
  if((total % 1) === 0) {
    total = total.toFixed(0);
  }
  else {
    total = total.toFixed(1);
  }


  if(!isFinite(total)) document.getElementById("mean").innerHTML = "";

  if(isFinite(total)) document.getElementById("mean").innerHTML = total + "/100";
}

function calculate1() {
  const grade = document.getElementById("grade1").value;
  const total = document.getElementById("total1").value;

  if(grade.length === 0){
    document.getElementById("percent1").innerHTML = "";
    return;
  }

  if(total.length === 0){
    document.getElementById("percent1").innerHTML = "";
    return;
  }

  let percent = ((grade / total) * 100);

  if((percent % 1) === 0) {
    percent = percent.toFixed(0);
  } 
  else {
    percent = percent.toFixed(2);
  }

  if(isFinite(percent)){
    document.getElementById("percent1").innerHTML = percent + '%';
  }
}

function calculate2() {
  const grade = document.getElementById("grade2").value;
  const total = document.getElementById("total2").value;

  if(grade.length === 0){
    document.getElementById("percent2").innerHTML = "";
    return;
  }

  if(total.length === 0){
    document.getElementById("percent2").innerHTML = "";
    return;
  }

  let percent = ((grade / total) * 100);
  
  if((percent % 1) === 0) {
    percent = percent.toFixed(0);
  } 
  else {
    percent = percent.toFixed(2);
  }

  if(isFinite(percent)){
    document.getElementById("percent2").innerHTML = percent + '%';
  }
}

function calculate3() {
  const grade = document.getElementById("grade3").value;
  const total = document.getElementById("total3").value;

  if(grade.length === 0){
    document.getElementById("percent3").innerHTML = "";
    return;
  }

  if(total.length === 0){
    document.getElementById("percent3").innerHTML = "";
    return;
  }

  let percent = ((grade / total) * 100);
  
  if((percent % 1) === 0) {
    percent = percent.toFixed(0);
  } 
  else {
    percent = percent.toFixed(2);
  }

  if(isFinite(percent)){
    document.getElementById("percent3").innerHTML = percent + '%';
  }
}

function calculate4() {
  const grade = document.getElementById("grade4").value;
  const total = document.getElementById("total4").value;

  if(grade.length === 0){
    document.getElementById("percent4").innerHTML = "";
    return;
  }

  if(total.length === 0){
    document.getElementById("percent4").innerHTML = "";
    return;
  }

  let percent = ((grade / total) * 100);
  
  if((percent % 1) === 0) {
    percent = percent.toFixed(0);
  } 
  else {
    percent = percent.toFixed(2);
  }

  if(isFinite(percent)){
    document.getElementById("percent4").innerHTML = percent + '%';
  }
}

