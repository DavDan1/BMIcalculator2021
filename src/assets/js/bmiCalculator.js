const  calculateMetricBMI = (weight, height) => {
	let  result
	result = weight / ((height / 100) * (height / 100))
	return  result
}
