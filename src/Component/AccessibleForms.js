import React from 'react';

const AccessibleForms = () => {
    return (
        <div>
            <form>
                <div>
                    {/*label for replace with htmlfor in react */}
                    <label htmlFor={"name"}>Name: </label>
                    <input name={"name"} id={"name"} />
                </div>
            </form>
        </div>
    );
};

export default AccessibleForms;