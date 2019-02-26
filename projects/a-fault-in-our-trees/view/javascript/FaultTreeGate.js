var FaultTreeGate = (function (_super) {
	__extends(FaultTreeGate, _super);
    function FaultTreeGate(pPosition) {
		_super.call(this);
        this.mChildren = new Array();
    }
    FaultTreeGate.prototype.getChild = function (pIndex) {
        return this.mChildren[pIndex];
    };
	FaultTreeGate.prototype.numChildren = function () {
        return this.mChildren.length;
    };
    FaultTreeGate.prototype.addChild = function (pChild) {
        this.mChildren.push(pChild);
    };
    
    FaultTreeGate.prototype.childWidth = function (context) {
		var total = 0;
        for (var i = 0; i < this.mChildren.length; i = i + 1)
		{
            var child = this.getChild(i);
            total = total + child.childWidth();
		}
        return total;
    };
	
	FaultTreeGate.prototype.drawChildren = function (context) {
        context.save();
        context.translate(-this.childWidth()/2, 200);
        var previousChild = 0;
        var ownWidth = 0;
        var widthChild = this.childWidth();
        

        for (var i = 0; i < this.mChildren.length; i = i + 1)
		{
            var child = this.getChild(i);
            context.save();
            context.translate(child.childWidth()/2 + previousChild + ownWidth,0);
            previousChild = previousChild + child.childWidth()/2;
            
            context.moveTo(0, -100);
            context.lineTo(widthChild/2 - ownWidth*2, -100);
            context.lineWidth = 3;
            context.stroke();
            
            ownWidth = ownWidth + child.childWidth()/2;
			child.draw(context);
            
            context.restore();
		}
        
        context.restore();
    };
	
    return FaultTreeGate;
})(FaultTreeNode);
