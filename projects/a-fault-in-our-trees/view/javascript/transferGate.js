var TransferGate = (function (_super) {
	__extends(TransferGate, _super);
    function TransferGate(pPosition) {
		_super.call(this);
    }
    
    TransferGate.prototype.childWidth = function (context) {
		var width = 200;
        return width;
    };
    
    TransferGate.prototype.drawTriangle = function (context) {
        var angles = 2 * Math.PI / 3;
        var xPos = 0;
        var yPos = 0;
        var radius = 100;
        
        for (var theta = 0; theta < 2 * Math.PI; theta += angles) 
        {
            var x = xPos + radius * Math.cos(theta);
            var y = yPos - radius * Math.sin(theta);
            context.lineTo(x, y);
        }
    };
	
    TransferGate.prototype.draw = function (context) {
        context.save();
        context.beginPath();
        context.translate(0, 15);
        context.rotate(Math.PI/6);
        this.drawTriangle(context);
        context.restore();
        context.closePath();
        
        
        context.fillStyle = 'white';
        context.fill();
        
		
		context.lineWidth = 1;
        context.stroke();
        
        context.save();
        context.moveTo(0, -85);
        context.lineTo(0, -100);
        context.lineWidth = 3;
        context.stroke();
        context.restore();
    };
	
    return TransferGate;
})(FaultTreeNode);
