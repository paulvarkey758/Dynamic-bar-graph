val=[500,1000,5000,3000,7500,3800,7000];
max_val=10000;
var bars=[]
percentages=[]

var graph=document.getElementById('graph')
console.log(graph)

var yDivider=10;
lineHeight=max_val/yDivider
lineList=[]
for(var i=1;i<yDivider+1;i++){
    newlineHeight=lineHeight*i
    linePercentage=(newlineHeight*100)/max_val
    var line=document.createElement('div')
    line.classList.add("division")
    line.style.height=linePercentage+"%";
    line.innerHTML=`<div class="line-inner"><div class="line-value">${newlineHeight}</div></div>`
    lineList.push(line)
}

for(var i=0;i<lineList.length;i++){
    graph.append(lineList[i])
}


for(var i=0;i<val.length;i++){
    percentage=(val[i]*100)/max_val
    console.log(percentage)
    var bar=document.createElement('div')
    bar.classList.add("bar")
    bars.push(bar)
    percentages.push(percentage)
}
console.log(bars)
console.log(percentages)
for(var i=0;i<bars.length;i++){
    graph.append(bars[i])
}
barList=document.querySelectorAll(".bar")
console.log(barList)
for(var i=0;i<barList.length;i++){
    barList[i].style.height=percentages[i]+"%"
    barList[i].innerHTML=`<div class="bar-inner"><div class="bar-value">${val[i]}</div></div>`
}

var yDivider=10;
lineHeight=max_val/yDivider
lineList=[]
for(var i=1;i<yDivider+1;i++){
    newlineHeight=lineHeight*i
    linePercentage=(newlineHeight*100)/max_val
    var line=document.createElement('div')
    line.classList.add("division")
    line.style.height=linePercentage+"%";
    line.innerHTML=`<div class="line-inner"><div class="line-value">${newlineHeight}</div></div>`
    lineList.push(line)
}

for(var i=0;i<lineList.length;i++){
    graph.append(lineList[i])
}
