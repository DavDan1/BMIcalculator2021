const  calculateMetricBMI = (weight, height) => {
	let  result
	result = weight / ((height / 100) * (height / 100));
	return  result.toFixed(2)
}
const  getBMIClassification = (value) => {
	if (value < 18.5){
	return  "Underweight"
	}else  if (value < 25){
	return  "Healthy"
	}else  if(value <30){
	return  "Overweight"
	}
}
