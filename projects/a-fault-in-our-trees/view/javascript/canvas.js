// check to see if the browser supports
// the addEventListener function
if(window.addEventListener)
{
	window.addEventListener('load', onLoad, false);
}

// the window load event handler
function onLoad()
{
	// variables
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
    
    var miniCanvas = document.createElement("canvas");
    var miniContext = miniCanvas.getContext("2d");

	var activeTree = 'Tree1';
    var helpPage = 'Page1';
    
	var faultTreesExample;
	var topNode;
    
    var ifMouseDown = false;
    var mouseDrag = new Vector(0, 0);
    var treeTranslate = new Vector(0,0);
    
    var toggleHelp = false;
 
	// this function will initialise our variables
	function initialise()
	{
        
		// if supported load the event to resize the canvas
		window.addEventListener('resize', resizeCanvas, false);
        //if supported load the event on key press
        window.addEventListener('keydown', onKeyDown, false);
        
        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
        canvas.addEventListener('mousemove', onMouseMove, false);
        
        canvas.addEventListener('mousewheel', onMouseWheel, false);
        
        
		// Find the canvas element using its id attribute.
		canvas = document.getElementById('canvas');
		// if it couldn't be found 
		if (!canvas)
		{
			// make a message box pop up with the error.
			alert('Error: I cannot find the canvas element!');
			return;
		}
		// check if there is a getContext function
		if (!canvas.getContext)
		{
			// make a message box pop up with the error.
			alert('Error: no canvas.getContext!');
			return;
		}
		// Get the 2D canvas context.
		context = canvas.getContext('2d');
		if (!context)
		{
			alert('Error: failed to getContext!');
			return;
		}
        
        miniCanvas = document.getElementById('canvas');
        miniContext = miniCanvas.getContext('2d');        
		
		faultTreesExample = new ExampleFaultTrees();
		topNode = faultTreesExample.generateSimpleExample();
		
		resizeCanvas();
	}
    

    
	// resizeCanvas function to resize the canvas appropriately to the size of the browser window
	function resizeCanvas() 
	{        
        context.save();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground();
        context.translate(canvas.width/2, canvas.height/2);
        draw(treeTranslate);
        toggleHelp = false;
        context.restore();
    }
	
    
    
    
    function onKeyDown(event)
    {
        var keyCode = event.keyCode;
        //alert(keyCode);
        switch(keyCode)
        {
            case 49:
                activeTree = 'Tree1';
                topNode = faultTreesExample.generateSimpleExample();
                draw(treeTranslate);
                break;
            case 50:
                activeTree = 'Tree2';
                topNode = faultTreesExample.generateSimpleExample2();
                draw(treeTranslate);
                break;
            case 51:
                activeTree = 'Tree3';
                topNode = faultTreesExample.generateSteeringBrakeExample();
                draw(treeTranslate);
                break;
            case 70:
                if (activeTree == 'Tree1')
                {
                    context.save();
                    context.setTransform(1.6, 0, 0, 1.6, 950, 500);
                    treeTranslate.setX(0);
					treeTranslate.setY(0);
					draw(treeTranslate);
					treeTranslate = Vector(0,0);
                    context.restore();
                }
                
                if (activeTree == 'Tree2')
                {
                    context.save();
                    context.setTransform(0.95, 0, 0, 0.95, 950, 300);
                    treeTranslate.setX(0);
					treeTranslate.setY(0);
                    draw(treeTranslate);
                    treeTranslate = Vector(0,0);
                    context.restore();
                }
                
                if (activeTree == 'Tree3')
                {
                    context.save();
                    context.setTransform(0.079, 0, 0, 0.079, 950, 500);
                    treeTranslate.setX(0);
					treeTranslate.setY(0);
                    draw(treeTranslate);
                    treeTranslate = Vector(0,0);
                    context.restore();
                }
                break;
            case 223:
                if (toggleHelp == false)
                {
                    toggleHelp = true;
                    drawHelp();
                }
            break;
            case 27:
                toggleHelp = false;
                draw(treeTranslate);
            break;
            case 39:
                    if (toggleHelp == true)
                        helpPage = 'Page2';
                    drawHelp();           
            break;
            case 37:
                    if (toggleHelp == true)
                        helpPage = 'Page1';
                    drawHelp();            
            break;
        }
        
    };
    
    
    
    
    function onMouseDown(event)
    {
        ifMouseDown = true;
        mouseDrag.setX(event.clientX-treeTranslate.getX());
        mouseDrag.setY(event.clientY-treeTranslate.getY());
    };
    
    
    
    
    function onMouseUp(event)
    {
        ifMouseDown = false;
    };
    
    
    
    
    function onMouseMove(event)
    {
        if(ifMouseDown)
        {
            treeTranslate.setX(event.clientX - mouseDrag.getX());
            treeTranslate.setY(event.clientY - mouseDrag.getY());
            draw(treeTranslate);
            toggleHelp = false;
        }
    };
    
    
    
    
    function onMouseWheel(event)
    {
        event.preventDefault();
        toggleHelp = false;
        
        var scale = 1;
        var originX = 0;
        var originY = 0;
        var mouseX = event.clientX - canvas.width/2;
        var mouseY = event.clientY - canvas.height/2;
        var wheel = event.wheelDelta/800;
        var zoom = Math.pow(1 + Math.abs(wheel)/2 , wheel > 0 ? 1 : -1);
        
        context.translate(originX,originY);
        context.scale(zoom,zoom);        
        context.translate(-(mouseX / scale + originX - mouseX / (scale * zoom)), -(mouseY / scale + originY - mouseY / (scale * zoom)));
        
        draw(treeTranslate);
                
        originX = (mouseX / scale + originX - mouseX / (scale * zoom));
        originY = (mouseY / scale + originY - mouseY / (scale * zoom));
    };
    
    
    
    
    function drawHelp()
    {
        var centerX = canvas.width/2;
        var centerY = canvas.height/2;
        miniContext.strokeStyle = 'black'; // border colour
        miniContext.lineWidth = '6'; // border size
            
        // Create gradient
        grd = miniContext.createLinearGradient(300, 600, 300, 0);
        // Add colors
        grd.addColorStop(0, 'rgba(150, 150, 150, 1)');
        grd.addColorStop(1, 'rgba(255, 255, 255, 1)');
            
        
        if (helpPage == 'Page1')
        {
            context.save();
            context.setTransform(1, 0, 0, 1, 0, 0);
            
            // Fill with gradient
            context.fillStyle = grd;
            context.fillRect(centerX - 400, centerY - 250, 800, 600);
            context.strokeRect(centerX - 400, centerY - 250, 800, 600);
        
            context.fillStyle = 'black';
            context.font="40px Arial";
            context.fillText("GUIDE", centerX - 60, centerY - 210);
        
            context.font="15px Arial";
            context.fillText("Press 'Esc' to close.", centerX + 263, centerY - 235);
            context.fillText("Page 1/2", centerX - 35, centerY + 340);
            context.fillText("Press > 'Page 2'", centerX + 280, centerY + 340);
            
            context.font="20px Arial";
            context.fillText("CONTROLS", centerX - 390, centerY - 190);
            context.fillText("'1' - Load the 'First' Fault Tree.", centerX - 380, centerY - 170);
            context.fillText("'2' - Load the 'Second' Fault Tree.", centerX - 380, centerY - 150);
            context.fillText("'3' - Load the 'Third' Fault Tree.", centerX - 380, centerY - 130);
            context.fillText("'F' - Draws the full Fault Tree to the canvas.", centerX - 380, centerY - 110);
            context.fillText("'Click 'n' Drag' - Click and drag with the mouse pointer to pan the Fault Tree.", centerX - 380, centerY - 80);
            context.fillText("'Zoom In/Out' - Using the middle mouse scroll wheel you can zoom in or out", centerX - 380, centerY + 120);
            context.fillText("based on the position of the mouse.", centerX - 243, centerY + 140);
            context.restore();
            
            
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(canvas.width/2, canvas.height/2);
            var clickanddrag = new Image();
            clickanddrag.src = "images/clickanddrag.gif";
            clickanddrag.onload = function() {
            context.drawImage(clickanddrag, -340, -70);}
        
            var zoomin = new Image();
            zoomin.src = "images/zoomin.gif";
            zoomin.onload = function() {
            context.drawImage(zoomin, -340, 150);}
            
        }
        
        if (helpPage == 'Page2')
        {
            context.save();
            context.setTransform(1, 0, 0, 1, 0, 0);
            
            // Fill with gradient
            context.fillStyle = grd;
            context.fillRect(centerX - 400, centerY - 250, 800, 600);
            context.strokeRect(centerX - 400, centerY - 250, 800, 600);
        
            context.fillStyle = 'black';
            context.font="40px Arial";
            context.fillText("GUIDE", centerX - 60, centerY - 210);
        
            context.font="15px Arial";
            context.fillText("Press 'Esc' to close.", centerX + 263, centerY - 235);
            context.fillText("Page 2/2", centerX - 35, centerY + 340);
            context.fillText("Press < 'Page 1'", centerX - 390, centerY + 340);
        
            context.font="20px Arial";
            context.fillText("DOCUMENTATION", centerX - 390, centerY - 190);
            context.fillText("The 3 different Fault Trees work of a switch statement based on a key-press.", centerX - 380, centerY - 170);
            context.fillText("I added a 'onKeyDown' event listener which reacts to a key press and the switch", centerX - 380, centerY - 150);
            context.fillText("command outputs a result based on which key is pressed. In my case as the user", centerX - 380, centerY - 130);
            context.fillText("presses one of the number keys (1-3) the tree changes to the appropriate one and", centerX - 380, centerY - 110);
            context.fillText("draws itself.", centerX - 380, centerY - 90);
            context.fillText("The 'Click and Drag' function to pan the Fault Tree works of a few different event", centerX - 380, centerY - 60);
            context.fillText("listeners to essentially get the position of the mouse as it gets clicked and the", centerX - 380, centerY - 40);
            context.fillText("amount it gets 'dragged' using the move event; using the amount saved then gets", centerX - 380, centerY - 20);
            context.fillText("sent to the draw function as a translate Vector to move the Fault Tree appropriately.", centerX - 380, centerY);
            context.fillText("The 'Zoom' function is another event listener which gets a value from the scroll wheel", centerX - 380, centerY + 30);
            context.fillText("and using an algorithm to get a smooth zoom scales the Fault Tree Up/Down", centerX - 380, centerY + 50);
            context.fillText("appriopriately. While using the position of the mouse translates the Fault Tree Out/In", centerX - 380, centerY + 70);
            context.fillText("depending on the zoom/mouse wheel.", centerX - 380, centerY + 90);
            context.fillText("This 'Guide' branches of from the initial key-press event and is an addition to the", centerX - 380, centerY + 120);
            context.fillText("switch statement: when the grave accent (`) gets pressed it triggers the event which", centerX - 380, centerY + 140);
            context.fillText("draws this 'Guide', when it is on screen the left and right arrow keys become available", centerX - 380, centerY + 160);
            context.fillText("which when pressed carries out the appropriate command: when the right arrow key is", centerX - 380, centerY + 180);
            context.fillText("pressed assuming the user is on 'Page 1' it changes the state of the Guide and draws", centerX - 380, centerY + 200);
            context.fillText("'Page 2' and vice versa for when the user is on 'Page 2' and presses the left arrow key.", centerX - 380, centerY + 220);
            context.fillText("There is a promt in the top right corner to press escape to close the Guide.", centerX - 380, centerY + 240);
            context.restore();
        }
    }
    
    
    
    function drawBackground()
    {
        context.save();
		
        grd = context.createLinearGradient(300, 600, 300, 0);
        // Add colors
        grd.addColorStop(0, 'rgba(230, 230, 230, 1)');
        grd.addColorStop(1, 'rgba(180, 180, 180, 1)');
        
        // Fill with gradient
        context.fillStyle = grd;
        context.fillRect(0,0, window.innerWidth, window.innerHeight);
		context.restore();
    }
    
    
    
    function drawMiniMap()
    {
        if (activeTree == 'Tree1')
        {
            miniContext.save();
            miniContext.setTransform(1, 0, 0, 1, 0, 0);
            miniContext.scale(0.2,0.2);
            miniContext.translate(550,290);
            miniContext.fillStyle = 'grey';
            miniContext.fillRect(-450, -200, 1250, 640);
            miniContext.lineWidth = '10';
            miniContext.strokeRect(-450, -200, 1250, 640);
        
            miniContext.translate(150,-20);
            miniContext.scale(0.7,0.7);
            topNode.draw(context);
            miniContext.restore();
        }
        
        if (activeTree == 'Tree2')
        {
            miniContext.save();
            miniContext.setTransform(1, 0, 0, 1, 0, 0);
            miniContext.scale(0.2,0.2);
            miniContext.translate(550,290);
            miniContext.fillStyle = 'grey';
            miniContext.fillRect(-450, -200, 1250, 640);
            miniContext.lineWidth = '10';
            miniContext.strokeRect(-450, -200, 1250, 640);
        
            miniContext.translate(150,-100);
            miniContext.scale(0.55,0.55);
            topNode.draw(context);
            miniContext.restore();
        }
        
        if (activeTree == 'Tree3')
        {
            miniContext.save();
            miniContext.setTransform(1, 0, 0, 1, 0, 0);
            miniContext.scale(0.2,0.2);
            miniContext.translate(550,290);
            miniContext.fillStyle = 'grey';
            miniContext.fillRect(-450, -200, 4950, 640);
            miniContext.lineWidth = '10';
            miniContext.strokeRect(-450, -200, 4950, 640);
        
            miniContext.translate(2000,-20);
            miniContext.scale(0.2,0.2);
            topNode.draw(context);
            miniContext.restore();
        }
    }
    
    
    
    function miniMapOverlay()
    {
        if (activeTree == 'Tree1')
        {
            miniContext.save();
            miniContext.setTransform(1, 0, 0, 1, 0, 0);
            miniContext.scale(0.13,0.13);
            miniContext.translate(-treeTranslate.getX() + 150, -treeTranslate.getY() + 140);
            miniContext.globalAlpha=0.2;
            miniContext.fillRect(0,0,window.innerWidth,window.innerHeight);
            miniContext.restore();
        }
        
        if (activeTree == 'Tree2')
        {
            miniContext.save();
            miniContext.setTransform(1, 0, 0, 1, 0, 0);
            miniContext.scale(0.1,0.1);
            miniContext.translate(-treeTranslate.getX() + 400, -treeTranslate.getY() + 190);
            miniContext.globalAlpha=0.2;
            miniContext.fillRect(0,0,window.innerWidth,window.innerHeight);
            miniContext.restore();
        }
        
        if (activeTree == 'Tree3')
        {
            miniContext.save();
            miniContext.setTransform(1, 0, 0, 1, 0, 0);
            miniContext.scale(0.04,0.04);
            miniContext.translate(-treeTranslate.getX() + 11700,-treeTranslate.getY() + 1100);
            miniContext.globalAlpha=0.2;
            miniContext.fillRect(0,0,window.innerWidth,window.innerHeight);
            miniContext.restore();
        }
    }
    
    
    
	// this function will actually draw on the canvas
	function draw(treeTranslate)
	{
        
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        drawBackground();
        context.restore();     
        
        context.save();
        context.translate(treeTranslate.getX(),treeTranslate.getY()-200);
		topNode.draw(context);
        context.restore();
        
        context.save();
        drawMiniMap();
        miniMapOverlay();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.font="15px Arial";
        context.fillText("Press (') 'grave accent' for a Guide", 30, 160);
        context.restore();
        
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.strokeStyle = 'black'; // border colour
		context.lineWidth = '20'; // border size
        context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
        context.restore();
	}
    
	// call the initialise and draw functions
	initialise();
	draw(treeTranslate);
}