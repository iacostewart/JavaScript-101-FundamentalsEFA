// Name	              Operator	                           Description	                                        Example
// Equal	                ==	    returns true if the values are equal, regardless of data-type	        3 == 3 //true; '3' == 3 //true
// Not Equal	            !=	    returns true if the values are not equal, regardless of data-type	    3 != 4 //true; '3' != 3 //false
// Strict Equal	        ===	    returns true ONLY if the values are equal AND the same data-type	    3 === 3 //true; '3' === 3 //false
// Strict Not Equal	    !==	    returns true if the values are not equal OR not the same data-type    	3 !== 4 //true; '3' !== 3 //true
// Greater than	        >	    returns true if value A is larger than value B	                        4 > 3 //true; 3 > 4 //false
// Greater than or equal	>=	    returns true if value A is larger or the same as value B	            4 >= 3 //true; 4 >= 4 //true; 3 >= 4 //false
// Less than	            <	    returns true if value A is smaller than value B	                        3 < 4 //true; 4 < 3 //false
// Less than or equal	    <=	    returns true if value A is smaller or the same as value B	            3 <= 4 //true; 3 <= 3 //true; 4 <= 3 //false
// AND	                    &&	    returns true ONLY if value/condition A AND value/condition B are true	true && true //true; true && false //false
// OR	                    ||	    returns true if EITHER value/condition A OR value/condition B are true	true|| false //true; false|| false //false