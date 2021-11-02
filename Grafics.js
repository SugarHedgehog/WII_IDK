(function() {
	NAinfo.requireApiVersion(0, 2);

	function grafic(type) {
		switch (type) {
		case 0:
			break;
		}
	}
	let paint1 = function(ct) {
		h = 300;
		//координаты
		ct.lineWidth = 0.5;
		ct.setka(25, 20);
		ct.lineWidth = 2;
		ct.drawLine(h / 2, 10, h / 2, h - 10);
		ct.drawLine(10, h / 2, h - 10, h / 2);
		//стрелки
		ct.drawLine(h - 15, h / 2 - 3, h - 10, h / 2);
		ct.drawLine(h - 15, h / 2 + 3, h - 10, h / 2);
		ct.drawLine(h / 2, 10, h / 2+3, 14);
		ct.drawLine(h / 2, 10, h / 2-3, 14);
		//ХУ
		ct.font = "12px serif Arial";
		ct.fillText(`X`, h/2+5, 15);
		ct.fillText(`Y`, h-20, h/2+13);
		//график
		ct.translate(h / 2, h / 2);
		let k = (sluchch(5, 10,2) / 10).pm();
		let b = (sluchch(0, 3) * 20).pm()+3;
		for (let i = -120; i < 120; i++)
			ct.drawLine(i - 1, k * (i - 1) + b, i, k * i + b);
		ct.translate(b, -b / k);
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
