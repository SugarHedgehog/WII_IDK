(function() {
	NAinfo.requireApiVersion(0, 2);

	function grafic(type) {
		switch (type) {
		case 0:
			break;
		}
	}
	let k =[1, 2, 3, 0.2, 0.4, 0.5,].iz().pm();
	let b = sluchch(0, 3).pm();
	let chisl=sluchch(7,20,0.5).pm();
	let answ=chisl*k+b;
	let X = [],
		Y = [];
	for (let i = -6; i < 0; i++)
		if ((k * i + b).isZ() && Math.abs(k * i + b) < 6) {
			X.push(i*20);
			Y.push((k * i + b)*20);
			break;
		}
	for (let i = 0; i < 7; i++)
		if ((k * i + b).isZ() && Math.abs(k * i + b) < 6) {
			X.push(i*20);
			Y.push((k * i + b)*20);
			break;
		}
	if(X.lenght==1)
	alert('!');
	b *= 20;
	let paint1 = function(ct) {
		h = 300;
		//координаты
		ct.lineWidth = 0.5;
		ct.setka(20, 20);
		ct.lineWidth = 2;
		ct.translate(-10, -10);
		ct.drawLine(h / 2, 30, h / 2, h - 10);
		ct.drawLine(10, h / 2, h - 10, h / 2);
		//стрелки
		ct.drawLine(h - 15, h / 2 - 3, h - 10, h / 2);
		ct.drawLine(h - 15, h / 2 + 3, h - 10, h / 2);
		ct.drawLine(h / 2, 30, h / 2 + 3, 34);
		ct.drawLine(h / 2, 30, h / 2 - 3, 34);
		//ХУ
		ct.font = "12px serif Arial";
		ct.fillText(`X`, h / 2 + 5, 30);
		ct.fillText(`Y`, h - 20, h / 2 + 13);
		ct.font = "18px serif Arial";
		ct.fillText(`1`, 170, 160);
		ct.fillText(`1`, 140, 140);
		ct.fillText(`0`, 140, 160);
		//всп линии
		ct.translate(h / 2, h / 2);
		ct.drawLine(-100, -120, 100, -120); //
		ct.drawLine(-100, 120, 100, 120); //
		ct.drawLine(-120, -100, -120, 100); //
		ct.drawLine(120, -100, 120, 100); //
		//график
		for (let i = -130; i < 120; i++)
			if (Math.abs(k * (i - 1) + b) < 110)
				ct.drawLine(i - 1, k * (i - 1) + b, i, k * i + b);
		//точки
		ct.fillKrug(X[0],Y[0],3);
		ct.fillKrug(X[1],Y[1],3);
	};
	NAtask.setTask({
		text: `На рисунке изображён график функции $f(x)=kx+b$. Найдите $f(${chisl})$. ` +
			`$f(x)=${k.ts()}x+${b/20}$ ` +
			`$$${X}${Y}$$`,
		answers: answ,
		analys: ``
	});
	chas2.task.modifiers.addCanvasIllustration({
		width: 300,
		height: 300,
		paint: paint1,
	});
})();
