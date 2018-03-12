// testing file for javascript
describe('MyApplication', () => {
	// Add an image carousel. This can be a carousel of screenshots of your projects
	describe('carousel', () =>{
		it('makes the image carousel function', () => {

		});

	});
	//Add a button in your navigation that will toggle the visibility of your actual site navigation.
	describe('toggleNav', () =>{
		it('toggles the navigation menu to show', () => {
			const navUl = document.createElement('ul');
			navUl.style.display = 'none';
			toggleNav(navUl);
			expect(navUl.style.display).toEqual('flex');
		});
		it('toggles the navigation menu to hidden', () => {
			const navUln- document.createElement('ul');
			navUl.style.display = 'flex';
			toggleNav(navUl);
			expect(navUl.style.display).toEqual('none');
		});
	});
	// Add a button and collapsable description to your portfolio projects so when the user clicks the button the descriptions expand and collapse
	describe('modDescription', () =>{
			it('collapses and expands the description in the project cards')

	});
	// Create a modal box that pops up with your bio information whenever a button or link is pressed
	describe('toggleNav', () =>{
			it('shows contact information when a button is pressed')

	});
});