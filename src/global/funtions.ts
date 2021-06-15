export const IS_NUMBER = (evt: { keyCode: any; preventDefault: () => void }) => {
	const charCode = evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
		evt.preventDefault();
	} else {
		return true;
	}
};
