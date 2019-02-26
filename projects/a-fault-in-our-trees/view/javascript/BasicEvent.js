var BasicEvent = (function (_super) {
	__extends(BasicEvent, _super);
    function BasicEvent(pPosition) {
		_super.call(this);
    }
    
    BasicEvent.prototype.childWidth = function (context) {
		var width = 200;
        return width;
    };

    BasicEvent.prototype.draw = function (context) {
        var angles = 2*Math.PI/40;
		var xPos = 0; 
		var yPos = 0;
		var radius = 85;
		
		context.save();
		context.beginPath();

		for(var theta=0; theta < 2*Math.PI; theta+=angles)
			{
				var x = xPos + radius*Math.cos(theta);
				var y = yPos - radius*Math.sin(theta);    
				context.lineTo(x,y);
			}

        context.closePath();
        
        
        context.fillStyle = 'white';
        context.fill();
        
        
        context.lineWidth = 3;
		context.stroke();
        context.restore();
        
        context.save();
        context.moveTo(0, -85);
        context.lineTo(0, -100);        
        context.lineWidth = 3;
        context.stroke();
        context.restore();
    };
    
    return BasicEvent;
})(FaultTreeNode);
