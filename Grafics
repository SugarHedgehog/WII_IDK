(function() {
	NAinfo.requireApiVersion(0, 2);

	function grafic(type) {
		switch (type) {
		case 0:
			break;
		}
	}
	let paint1 = function(ct) {
		h=300;
		ct.setka(25, 20);
		ct.lineWidth = 2;
		ct.drawLine(h/2, 10, h/2, h-10);
		ct.drawLine(10, h/2, h-10, h/2);
		ct.translate(h/2, h/2);
		let k = (sluchch(1,10)/10).pm();
		let b = (sluchch(0, 3)*20).pm();
		ct.lineWidth = 3;
		for (let i = -120; i < 120; i++)
			ct.drawLine(i-1,k*(i-1)+b,i,k*i+b);
		ct.translate(b,-b/k);
	};
	NAtask.setTask({
		text: `На рисунке изображён график функции $f(x)=kx+b$. Найдите $f(-5)$`,
		answers: 0,
		analys: ``
	});
	chas2.task.modifiers.addCanvasIllustration({
		width: 300,
		height: 300,
		paint: paint1,
	});
})();
