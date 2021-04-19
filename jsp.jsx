// Predict 1, my prediction was 0...14 logged

for(var num = 0; num < 15; num++){
    console.log(num);
}

// Predict 2, my prediction was 3, 9 logged
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// Predict 3, my prediction was 1,4,5,6,8,10,12,13,14,16 logged ** I was wrong on a few
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

// Answers

dirkkinley@Dirks-MacBook-Pro 0419-practice % node jsp.jsx
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
//
3
9
//
1
4
5
8
10
11
14
16