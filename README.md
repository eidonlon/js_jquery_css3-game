# js_jquery_css3-game
游戏

主要是为了练习一下css3的3D翻转效果，做了这个小游戏，其中主要涉及的css3代码如下：
 html结构：
 
 
 
       <div class="container">
         <div class="side">
         
            <div class="front">
              <!-- 正面 -->
            </div>
    
            <div class="back">
              <!-- 反面 -->
            </div>
    
         </div>
      </div>
  
  css样式：



          .container {
            perspective: 1000;
           ｝
          .container:hover .side{  
             transform: rotateY(180deg);
          }
          .container, .front, .back {
            width: 320px;
            height: 480px;
          }
          .side {
            transition: 0.6s;
            transform-style: preserve-3d;  /*让其子元素有3D翻转的效果。*/
            position: relative;
          }
          .front, .back {
            backface-visibility: hidden; /*将反转了180度的隐藏*/
            position: absolute;
          }
          .front {
            background-color: red;
          }
          .back {
            transform: rotateY(180deg);
            background-color: blue;
          }
          
  
  
这样设置之后，只要鼠标移入，就会有3D翻转效果，就类似于翻一张卡片，正面，反面。
