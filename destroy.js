function OnCollisionEnter(collision : Collision)
{
    if (collision.gameObject.tag == "projectile")
    {
        Destroy(collision.gameObject);
    }
}
