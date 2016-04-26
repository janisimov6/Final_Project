#pragma strict

function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.name == "Mouse")
    {
        Destroy(col.gameObject);
    }
}
